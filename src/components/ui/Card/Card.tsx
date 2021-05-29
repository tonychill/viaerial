import { FC, Fragment } from "react";
import { utils } from "../../../hooks";
import Header from "../../core/Header";
import Link from "next/link";
import Media from "../Media";

// import { CardProps } from "../../../ts";
//TODO: Add min height to card image. This should be done using the Media component.
interface xCardProps {
  type: "reward" | "promo" | "story" | "experience" | "event" | "info" | "category";

  title?: string;
  location?: { lat: number; long: number };
  content: string;
  onClick?: () => void;
  // followers?: Profile[];
  /*
   */
}
interface CardProps {
  data?: any;
  meta?: unknown;
  profile?: string;
  media?: string | { src: any; link: any }[];
  kind: "reward" | "promo" | "story" | "experience" | "help" | "event" | "info" | "category" | "other";
  image?: string | object[];
  title?: string;
  body?: string;
  id?: string;
}
/**TODO: Handle situations where the card conentent is larger than a certain
 * character count and will have to expand?
 */
const Card: FC<CardProps> = ({ kind, title, data, media, id }) => {
  const parsedMedia = utils.parseMediaToObjectArray(data?.fields?.media);

  // const Media = () => (
  //   <section className=" mb-2">
  //     <div className=" overflow-hidden shadow-sm rounded-md">
  //       <div className=" box-border rounded-full">
  //         <div className=" cursor-pointer flex overflow-hidden relative items-center flex-row">
  //           <div>
  //             <img className=" border-0 max-w-full align-middle" src="https://picsum.photos/640/400/?random" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
  // const Title = ({ title }) => {
  //   return (
  //     <section className={classes.story_title}>
  //       <Grid container>
  //         <Grid item>
  //           <Type variant="body2">{title}</Type>
  //         </Grid>
  //       </Grid>
  //     </section>
  //   );
  // };
  // const Content = ({ content, storyId, storyOpened }) => {
  //   return (
  //     <section className={classes.content_body}>
  //       {1 ? (
  //         <div>
  //           <Type variant="body1" className={clsx(classes.caption, storyOpened ? classes.story_opened : null)}>
  //             {content.content[0].content[0].value}
  //           </Type>
  //         </div>
  //       ) : (
  //         <div className={classes.caption}>hello</div>
  //       )}
  //     </section>
  //   );
  // };
  const Title = () => (
    <section className="mt-3 px-4">
      <div>
        <p className="overflow-hidden text-2xl text-gray-600 font-medium line-clamp-3 overflow-ellipsis">Earning Coins</p>
      </div>
    </section>
  );
  const HelpContent = () => (
    <section className="mt-3 px-4">
      <div>
        <p className="overflow-hidden line-clamp-3 overflow-ellipsis">
          In order to earn coins you will need to come up with a way to play with the platform to get it.
        </p>
      </div>
    </section>
  );
  const Content = () => (
    <section className="mt-3">
      <div>
        <p className="overflow-hidden line-clamp-3 overflow-ellipsis">@bvi !!! I need you back in my life! When are you opening your borders back up again? </p>
      </div>
    </section>
  );

  switch (kind) {
    case "experience":
      return (
        <div className=" pb-7">
          {kind ? (
            <Fragment>
              {media ? <Media type="multi" media={media} /> : null}
              <Content />
            </Fragment>
          ) : null}
        </div>
      );
    case "help":
      return (
        <Link href={`/help/${id}`}>
          <div className="pb-7 mb-4 border-solid border rounded-xl border-indigo-50 p-2 cursor-pointer">
            {kind ? (
              <Fragment>
                <img
                  className="rounded-xl  h-full w-full inset-0 static object-cover"
                  // src={parsedMedia[0].src}
                  src="//images.ctfassets.net/g5nrk2qtffpm/1bqMWJBKE9MhwXP5KAjJir/1a81ded244c7e9a6c8ccac73c82859dc/Scrub_20Island_20Resort_20Dusk.jpg"
                />
                <Title />
                <HelpContent />
              </Fragment>
            ) : null}
          </div>
        </Link>
      );
    default:
      return (
        <div className=" pb-7">
          {kind ? (
            <Fragment>
              <Header />
              <img className="rounded-xl  h-full w-full inset-0 static object-cover" src={parsedMedia[0].src} />
              {/* {parsedMedia && typeof parsedMedia === "object" ? <Media type="multi" media={parsedMedia} /> : null} */}
              <Content />
            </Fragment>
          ) : null}
        </div>
      );
  }
};
export default Card;
