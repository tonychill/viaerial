import { useState, useContext, useEffect, FC, FormEvent } from "react";
import { GlobalContext } from "../../../../context";
import { IBookingRequestResponse, sendBookingRequest, sendBookingRequestTEST } from "../../../../utils/sendBookingRequest";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormikInput } from "../../../core/Input/FormikInput";
import { object, string, bool } from "yup";
import { ExperienceFields } from "../../../../ts/page-props";
import clsx from "clsx";
import s from "./BookingRequestForm.module.css";
import Section from "../../../core/Section";
import Modal from "../../../core/Modal";
// import SignUp from "../SignUp/index";
import Input from "../../../core/Input";
import Button from "../../../core/Button";
import Type from "../../../core/Type";
import DatePicker from "../../DatePicker";

interface BookingReqProps {
  experience: ExperienceFields;
  resourceId: string;
}

interface ICurrentUser {
  name: string;
  email: string;
  status?: "isAuth";
  id?: string;
}

type RequestStateParams = "ready" | "processing" | "not-auth" | "request-only" | "done";

const BookingRequestForm: FC<BookingReqProps> = ({ resourceId, experience }) => {
  const { currentUser } = useContext(GlobalContext);
  const [guestName, setGuestName] = useState("");
  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [requestState, setRequestState] = useState<RequestStateParams>("ready");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openJoinModal, setOpenJoinModal] = useState(false);
  const [bookingResponse, setBookingResponse] = useState({});

  const ctaColor = currentUser ? "#5DBBFF" : "";

  return (
    <div className={clsx("md:rounded-lg md:border md:shadow-md")}>
      <div className={clsx("flex w-full flex-wrap md:p-7")}>{renderRequestState(requestState)}</div>
    </div>
  );

  function renderRequestState(currentRequestState: any) {
    switch (currentRequestState) {
      case "ready":
        return (
          <>
            <Section>
              <div className="md:hidden">
                <Type variant="heading">{experience.name}</Type>
              </div>
              <div className="flex">
                <span>
                  <Type variant="title">{`$${Math.floor(experience.rate / 7)}`}</Type>
                </span>

                <span className="ml-1">
                  <Type variant="base">/night+</Type>
                </span>
              </div>
            </Section>
            <Section>
              <div className=" sm:overflow-hidden rounded-xl ">
                <DatePicker startDate={startDate} endDate={endDate} setEndDate={setEndDate} setStartDate={setStartDate} />
                <div className="mt-4">
                  <Input className={s.guestInpu} label="Guests" placeholder="" type="number" name="guests" value={guests} onChange={handleInputChange} />
                </div>
              </div>
            </Section>
            <Section>
              <div className="call to action">
                <div className="button group">
                  <Button variant="primary" onClick={() => handleBookingRequest()} fullWidth text="Request" bgcolor={ctaColor} />
                </div>
              </div>
            </Section>

            {/* <Modal open={isModalOpen} title="Booking Request" toggleModal={toggleModal}></Modal> */}
            {/* TODO: Remove and place in the _app.tsx and use context given that this is global.  😉 */}
          </>
        );
      case "not-auth":
        return (
          <>
            <Section>
              <Type variant="title">Oops, looks like you should get some coins and save.</Type>
            </Section>
            <Section>For a limited time you can purchase up to $10,000 in coins and turn them into over $50k in value.</Section>
            <Section>
              <Button onClick={() => handleSignUp()} variant="primary" text="Get me some coins!"></Button>
            </Section>
            <Section>
              <Button onClick={() => setRequestState("request-only")} variant="secondary" text="Just the booking, thanks."></Button>
            </Section>
            <Modal title="Sign up" open={isModalOpen} toggleModal={toggleModal}>
              {/* <SignUp /> */}
            </Modal>
          </>
        );
      case "request-only":
        return (
          <>
            <Section>
              <Type variant="title">Give us the deets.</Type>
            </Section>
            <Section>
              <Formik
                validationSchema={object({
                  name: string().required(),
                  email: string().email().required(),
                })}
                initialValues={{ name: "", email: "", notes: "" }}
                // validate={(values) => {
                //   // console.log(values);
                //   // const errors: { email?: string } = {};
                //   // if (!values.email) {
                //   //   errors.email = "Required";
                //   // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                //   //   errors.email = "Invalid email address";
                //   // }

                //   // return errors;
                // }}
                onSubmit={async (request) => {
                  await handleBookingRequest(request);
                }}
              >
                <Form>
                  <Section space={4}>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      component={FormikInput}
                      onKeyDown={handleKeyDown}
                      // onChange={handleInputChange} ?? Is this needed?
                    ></Field>
                    <div className="mt-1">
                      <ErrorMessage name="name">{(msg) => <Type variant="error">Tell us your name so we can better help you. </Type>}</ErrorMessage>
                    </div>
                  </Section>
                  <Section space={4}>
                    <Field
                      type="text"
                      name="email"
                      placeholder="your@email.com"
                      component={FormikInput}
                      onKeyDown={handleKeyDown}
                      // onChange={handleInputChange} ?? Is this needed?
                    ></Field>
                    <div className="mt-1">
                      <ErrorMessage name="email">
                        {(msg) => <Type variant="error">You will need to enter your email before you can make a request. </Type>}
                      </ErrorMessage>
                    </div>
                  </Section>
                  <Section space={4}>
                    <Field
                      type="text"
                      name="notes"
                      placeholder="Let us know if you have any special requests"
                      component={FormikInput}
                      onKeyDown={handleKeyDown}
                      // onChange={handleInputChange} ?? Is this needed?
                    ></Field>
                  </Section>
                  <Section space={4}>
                    <Button variant="primary" type="submit" fullWidth text="Submite Request" status={"ready"} />
                  </Section>
                </Form>
              </Formik>
            </Section>
          </>
        );
      case "processing":
        return (
          <div>
            <div>Processing</div>
          </div>
        );
      case "done":
        return (
          <div>
            <div>Thanks, we got your request. Someone will be in contact with you in a few.</div>
          </div>
        );
      default:
        return <div>This is the default</div>;
    }
  }

  async function handleBookingRequest(request?: any) {
    const bookingRequest = {
      userId: currentUser ? currentUser.sub : "This user has not created an account.",
      name: currentUser ? currentUser.name : request ? request.name : "", //TODO: Fix the logic here so that it doesn't error out when the user initially clicks request.
      notes: request ? request.notes : "",
      email: currentUser ? currentUser.email : request ? request.email : "",
      guests,
      resourceId,
      experience: experience.place!,
      //TODO: Update the experience objects to the followoing values. These better reflect what data is being passed to the server.
      //experienceName
      //experienceId
      startDate,
      endDate,
    };
    //TODO: Add logic to allow logged in user to add notes. This may not be needed as the Trips functionality will take over this.
    if (currentUser != null) {
      setRequestState("processing");
      try {
        // const bookingRequestRespons: IBookingRequestResponse = await sendBookingRequest(bookingRequest);
        await handleRequestCall(bookingRequest);
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    }

    if (requestState === "request-only") {
      setRequestState("processing");
      try {
        // const bookingRequestRespons: IBookingRequestResponse = await sendBookingRequest(bookingRequest);
        await handleRequestCall(bookingRequest);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    if (currentUser == null) {
      setRequestState("not-auth");
      return;
    }
  }

  /**
   * Future implementation. This function takes the user's input and adds it to
   * the component's State. With this state is constantly updated as the user inputs
   * information in to the form.
   *
   * @param e input from Formik powerd Input component
   */
  function handleInputChange(e: FormEvent<HTMLInputElement>) {
    if (e.currentTarget.name === "guests" && +e.currentTarget.value > 0) setGuests(+e.currentTarget.value);

    //TODO: Possibel future implementations
    // if (e.target.name === "name") setName(e.target.value);
    // if (e.target.name === "email") setEmail(e.target.value);
    // if (e.target.name === "phone") setPhone(+e.target.value);
  }
  interface IBookingRequest {
    userId: string;
    name: any;
    notes: any;
    email: any;
    guests: number;
    resourceId: string;
    experience: string;
    startDate: undefined;
    endDate: undefined;
    //experienceName
    //experienceId
  }
  async function handleRequestCall(bookingRequest: IBookingRequest) {
    const bookingRequestResponse: IBookingRequestResponse = await sendBookingRequest(bookingRequest);
    setBookingResponse(bookingRequestResponse);
    setRequestState("done");
  }
  function handleSignUp() {
    setIsModalOpen(!isModalOpen);
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      //handleSignUp(name, email, password)
    }
  }
};

export default BookingRequestForm;
