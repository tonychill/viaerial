import { FC } from "react";
import Type from "../../core/Type";

interface RichBodyParserProps {
  richBody: { nodeType: string; content: any[] }[];
}
const RichBodyParser: FC<RichBodyParserProps> = ({ richBody }) => {
  return (
    <div className="line-clamp-4">
      {richBody?.map((content, idx) => {
        // if (content.content[0]?.value === "bold text") {
        //   return (
        //     <div key={idx} style={{ marginTop: 16 }} >
        //       <div >
        //         <Type variant="title">{content.content[0]?.value}</Type>
        //       </div>
        //     </div>
        //   );
        // }
        switch (content.nodeType) {
          case "heading-1":
            return (
              <div key={idx} style={{ marginTop: 16 }}>
                <Type variant="shout">{content.content[0].value}</Type>
              </div>
            );
          case "heading-2":
            return (
              <div key={idx} style={{ marginTop: 16 }}>
                <Type variant="main">{content.content[0].value}</Type>
              </div>
            );
          case "blockquote":
            return (
              <div key={idx}>
                <Type variant="base" italic>
                  {content.content[0].content[0].value}
                </Type>
              </div>
            );
          case "bold text":
            return (
              <div key={idx}>
                <Type variant="base" bold>
                  {content.content[0].content[0].value}
                </Type>
              </div>
            );
          case "unordered-list":
            return (
              <div key={idx}>
                <div>
                  <Type variant="title">{content.content[0].value}</Type>
                  <ul>
                    {content.content.map((item, idx) => {
                      return (
                        <li className="mt-4" key={idx}>
                          {item.content[0].content[0].value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          /**TODO: Contentful content parsing
           * Complete the following algo that will account for variations within a single
           * paragraph such as bold, underlined, and italized text. These will be send
           * from Contentful as more than one element in the content array.
           */
          case "paragraph":
            return (
              <div key={idx} style={{ marginTop: 16 }}>
                <div>
                  {content.content.length > 0 ? (
                    <Type variant="base">
                      {content.content.map((text) => {
                        return (
                          <span key={content.content.indexOf(text)}>
                            {text.marks.length >= 1 && text.marks[0].type === "bold" ? (
                              <b>{text.value}</b>
                            ) : text.marks.length >= 1 && text.marks[0].type === "italic" ? (
                              <i>{text.value}</i>
                            ) : text.marks.length >= 1 && text.marks[0].type === "underline" ? (
                              <u>{text.value}</u>
                            ) : (
                              text.value
                            )}
                          </span>
                        );
                      })}
                    </Type>
                  ) : (
                    <Type variant="base">{content.content[0].value}</Type>
                  )}
                </div>
              </div>
            );
        }
      })}
    </div>
  );
};

export default RichBodyParser;

/*** Notes ***
 * Notes go here.
 */
