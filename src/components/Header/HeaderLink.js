import React from "react";

import {
  Wrapper,
  Link,
  SquigglyUnderlineContainer,
  UnderlineInnerContainer,
  UnderlinePath,
} from "./HeaderLinkStyles.js";

function tempAlert() {
  alert("That section doesn't exist yet, sorry!");
}

// TODO: remove onChilldClick?
function HeaderLink({ link, linkText, onChildClick }) {
  return (
    <Wrapper onClick={tempAlert}>
      <Link href={link} onClick={onChildClick}>
        {linkText}
        {/* slide in class */}
        <SquigglyUnderlineContainer>
          {/* underline class*/}
          <UnderlineInnerContainer>
            <div className="underline_wrapper">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 100 11"
                style={{ whiteSpace: "pre" }}
              >
                <g id="wiggle-1">
                  <UnderlinePath
                    id="wiggle-one"
                    d="M1.266,3.138C7.57,3.081,13.66,3.31,19.888,3.903c6.143,0.585,12.279-0.85,18.405-1.059
                	c0.659-0.075,1.322-0.152,1.989-0.229c0.666-0.077,1.336-0.153,2.008-0.226c7.594-1.293,15.594,0.707,23.129,0.979
                	c0.578-0.015,1.156-0.04,1.734-0.074c2.406-0.141,4.81-0.428,7.247-0.697c0.487-0.053,0.976-0.104,1.469-0.155
                	c7.015-1.347,13.015,0.653,19.866,0.937"
                  />
                </g>
                <g id="wiggle-2">
                  <UnderlinePath
                    id="wiggle-two"
                    d="M1.224,3.942c5.366-0.915,10.92,0.182,16.633,0.845c4.48,0.52,9.03,0.779,13.532,0.4
                        c4.393-0.37,8.565-1.978,12.939-2.433C49.1,2.258,53.8,3.384,58.463,4.227C64.38,5.298,70.03,4.394,75.914,3.781
                        c6.034-0.629,12.122,0.159,18.106,0.923c0.586,0.004,1.171,0.012,1.756,0.02"
                  />
                  <UnderlinePath
                    id="Path_1534_8_"
                    d="M1.646,5.062c2.332,0.292,4.724,0.14,7.048-0.157c5.279-0.87,10.646-1.383,16-1.262
                        c5.035,0.114,9.891,1.405,14.901,1.602c0.673,0.026,1.352,0.036,2.035,0.029c10.082-0.103,19.919-3.679,30.019-2.186
                        c7.74,1.144,15.916,0.741,23.705,0.397"
                  />
                </g>
                <g id="wiggle-3">
                  <UnderlinePath
                    id="wiggle-three"
                    d="M1.646,5.062c2.332,0.292,4.724,0.14,7.048-0.157c5.279-0.87,10.646-1.383,16-1.262
                	c5.035,0.114,9.891,1.405,14.901,1.602c0.673,0.026,1.352,0.036,2.035,0.029c10.082-0.103,19.919-3.679,30.019-2.186
                	c7.74,1.144,15.916,0.741,23.705,0.397"
                  />
                </g>
                <g id="wiggle-4">
                  <UnderlinePath
                    id="wiggle-four"
                    d="M1.647,5.72C2.85,5.8,4.002,5.923,5.138,6.029c5.418,0.507,9.141-1.673,14.244-2.249
                c6.61-0.746,13,1.161,19.541,1.619c3.222,0.225,6.513,0.022,9.751-0.511c0.54-0.089,1.078-0.187,1.614-0.292
                c7.17-2.555,14.17-3.555,21.799-1.867c0.626,0.156,1.25,0.336,1.87,0.536c0.62,0.2,1.237,0.421,1.849,0.661
                c0.625,0.159,1.257,0.298,1.893,0.418c5.734,1.073,11.861,0.508,17.652-0.486"
                  />
                </g>
              </svg>
            </div>
          </UnderlineInnerContainer>
        </SquigglyUnderlineContainer>
      </Link>
    </Wrapper>
  );
}

export default HeaderLink;
