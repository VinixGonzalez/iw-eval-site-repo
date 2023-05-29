import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Heart({
  height = "24",
  viewBox = "0 0 24 24",
  width = "24",
  className,
  fill,
  fillList = ["#fff", "#591ee5"],
}: SVGProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox={viewBox}
      >
        <g
          id="Group_44989"
          data-name="Group 44989"
          transform="translate(-878 -485)"
        >
          <circle
            id="Ellipse_575"
            data-name="Ellipse 575"
            cx="12"
            cy="12"
            r="12"
            transform="translate(878 485)"
            fill={fillList[0]}
          />
          <path
            id="noun-hearth-4328461"
            d="M121.514,76.263a3.113,3.113,0,0,0-4.167.282l-.72.726-.72-.726a3.112,3.112,0,0,0-4.167-.282,3.056,3.056,0,0,0-1.11,2.227,3.094,3.094,0,0,0,.889,2.319l4.491,4.528a.868.868,0,0,0,1.233,0l4.491-4.528a3.089,3.089,0,0,0-.221-4.547Z"
            transform="translate(773.371 417.406)"
            fill={fillList[1]}
          />
        </g>
      </svg>
    </>
  );
}
