/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { TBodyMapValue } from "@/types";
import { Tooltip } from "antd";

type TBackBodyProps = {
  bodyMap: any;
  addPart?: (data: { key: string; value: TBodyMapValue }) => void;
};

const BackBody = ({ bodyMap, addPart }: TBackBodyProps) => {
  return (
    <svg
      width="302"
      height="725"
      viewBox="0 0 302 725"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M127.778 101.251C127.778 101.251 113.782 89.0994 113.164 78.5824C113.113 77.7084 113.062 76.856 113.012 76.0227C113.012 76.0227 102.934 73.8585 102.934 69.0759V55.5477C102.934 51.1161 111.605 48.2352 111.605 48.2352C111.432 42.2894 111.337 35.4991 111.337 26.6636C111.337 8.0467 132.945 0.163112 151.526 1.06989C168.805 1.91313 187.696 9.35124 187.696 26.6636V48.2352C187.696 48.2352 197.196 50.864 197.196 55.5477V69.0759C197.196 73.6739 187.696 76.0227 187.696 76.0227V77.4855C187.696 88.5355 172.351 101.251 172.351 101.251V122.823C172.351 122.823 196.099 138.91 216.925 144.395C232.423 148.477 237.137 161.325 242.64 176.322L242.865 176.935C256.018 212.766 256.018 269.073 256.018 269.073C256.018 269.073 262.123 288.05 264.786 300.517C269.079 320.608 270.632 352.801 270.632 352.801L298.764 385.341C298.764 385.341 302.597 392.195 300.226 394.482C297.303 397.301 289.996 392.654 289.996 392.654L279.4 379.126L293.649 413.86C293.649 413.86 293.443 417.61 291.822 418.979C290.064 420.464 285.977 419.71 285.977 419.71L273.555 394.117L284.515 420.807C284.515 420.807 284.127 424.023 282.689 425.195C281.123 426.469 277.574 425.926 277.574 425.926L263.69 396.31L272.093 418.979C272.093 418.979 271.605 422.494 269.901 423.367C268.083 424.298 264.786 422.27 264.786 422.27L254.922 396.676L260.037 414.592C260.037 414.592 258.111 417.908 256.018 418.248C254.236 418.537 251.633 416.785 251.633 416.785C251.633 416.785 244.498 400.488 242.865 389.364C240.976 376.496 244.326 356.092 244.326 356.092C244.326 356.092 231.551 327.574 227.155 308.195C224.313 295.671 222.405 275.654 222.405 275.654L208.156 210.939C208.156 210.939 200.476 265.738 204.503 300.517C206.663 319.182 211.694 329.035 214.002 347.682C217.755 378.007 215.963 395.433 214.002 425.926C212.312 452.19 211.288 467.062 205.964 492.835C203.764 503.484 199.388 519.892 199.388 519.892C199.388 519.892 200.671 560.366 197.926 586.07C195.257 611.075 188.539 624.318 185.87 649.323C184.336 663.688 183.677 686.251 183.677 686.251C183.677 686.251 202.288 694.959 205.964 705.995C207.791 711.479 179.659 727.566 161.025 722.814C155.927 721.513 150.795 714.039 150.795 714.039V690.639L154.084 685.52L150.795 549.142L155.545 525.01L151.526 433.97L150.065 374.739L146.046 525.01L150.065 549.142L146.046 685.52L150.065 690.639V714.039C150.065 714.039 148.238 720.254 136.547 722.814C124.49 723.91 105.857 722.814 94.1655 705.995C92.3387 698.316 116.452 686.251 116.452 686.251C116.452 686.251 116.265 663.668 114.625 649.323C111.746 624.134 102.636 611.287 100.011 586.07C97.3352 560.358 101.473 519.892 101.473 519.892C101.473 519.892 97.2133 503.46 94.8962 492.835C89.2589 466.988 84.3009 425.926 84.3009 425.926C84.3009 425.926 80.2752 380.408 84.3009 351.704C87.158 331.333 94.1914 320.931 96.723 300.517C100.843 267.291 91.2426 214.961 91.2426 214.961L76.2631 275.654C76.2631 275.654 75.0885 295.65 72.6095 308.195C68.7845 327.552 56.5339 356.092 56.5339 356.092C56.5339 356.092 58.101 375.578 56.5339 387.901C55.1054 399.135 49.5922 416.054 49.5922 416.054C49.5922 416.054 47.2655 419.008 45.2079 418.979C43.0679 418.95 40.8237 415.689 40.8237 415.689L43.7465 399.235L37.1701 422.635C37.1701 422.635 34.5778 425.86 32.4205 425.56C30.5191 425.297 28.767 422.27 28.767 422.27L34.6126 397.773L25.8441 423.001C25.8441 423.001 21.3777 427.1 18.537 425.926C15.5735 424.701 15.6142 418.248 15.6142 418.248C15.6142 418.248 11.9513 421.055 9.76852 420.076C7.61312 419.11 7.21103 414.592 7.21103 414.592L18.537 381.32L8.3071 395.214C8.3071 395.214 4.5723 396.453 2.82677 395.214C1.09683 393.985 1 390.095 1 390.095C1 390.095 4.33197 377.626 9.03781 371.082C14.791 363.082 28.767 355.361 28.767 355.361C28.767 355.361 28.6529 322.115 33.5166 301.614C36.612 288.566 44.4772 269.073 44.4772 269.073C44.4772 269.073 46.304 218.251 54.3418 184.614C58.6863 166.432 64.671 154.661 80.282 144.395C93.0694 135.985 102.934 135.62 127.778 123.92V101.251Z"
        fill="#F6F6F6"
      />
      <path
        d="M15.6142 418.248C15.6142 418.248 11.9513 421.055 9.76852 420.076C7.61312 419.11 7.21103 414.592 7.21103 414.592L18.537 381.32L8.3071 395.214C8.3071 395.214 4.5723 396.453 2.82677 395.214C1.09683 393.985 1 390.095 1 390.095C1 390.095 4.33197 377.626 9.03781 371.082C14.791 363.082 28.767 355.361 28.767 355.361C28.767 355.361 28.6529 322.115 33.5166 301.614C36.612 288.566 44.4772 269.073 44.4772 269.073C44.4772 269.073 46.304 218.251 54.3418 184.614C58.6863 166.432 64.671 154.661 80.282 144.395C93.0694 135.985 102.934 135.62 127.778 123.92C127.778 115.145 127.778 101.251 127.778 101.251C127.778 101.251 113.782 89.0994 113.164 78.5824C113.113 77.7084 113.062 76.856 113.012 76.0227M15.6142 418.248L24.7481 394.482M15.6142 418.248C15.6142 418.248 15.5735 424.701 18.537 425.926C21.3777 427.1 25.8441 423.001 25.8441 423.001L34.6126 397.773L28.767 422.27C28.767 422.27 30.5191 425.297 32.4205 425.56C34.5778 425.86 37.1701 422.635 37.1701 422.635L43.7465 399.235L40.8237 415.689C40.8237 415.689 43.0679 418.95 45.2079 418.979C47.2655 419.008 49.5922 416.054 49.5922 416.054C49.5922 416.054 55.1054 399.135 56.5339 387.901C58.101 375.578 56.5339 356.092 56.5339 356.092C56.5339 356.092 68.7845 327.552 72.6095 308.195C75.0885 295.65 76.2631 275.654 76.2631 275.654L91.2426 214.961M91.2426 214.961L87.2237 199.604M91.2426 214.961C91.2426 214.961 100.843 267.291 96.723 300.517C94.1914 320.931 87.158 331.333 84.3009 351.704C80.2752 380.408 84.3009 425.926 84.3009 425.926C84.3009 425.926 89.2589 466.988 94.8962 492.835C97.2133 503.46 101.473 519.892 101.473 519.892C101.473 519.892 97.3352 560.358 100.011 586.07C102.636 611.287 111.746 624.134 114.625 649.323C116.265 663.668 116.452 686.251 116.452 686.251C116.452 686.251 92.3387 698.316 94.1655 705.995C105.857 722.814 124.49 723.91 136.547 722.814C148.238 720.254 150.065 714.039 150.065 714.039V690.639L146.046 685.52L150.065 549.142L146.046 525.01C146.046 525.01 148.495 433.423 150.065 374.739M150.065 374.739C142.587 383.798 134.766 387.605 123.029 387.901C110.646 388.213 94.1655 374.739 94.1655 374.739M150.065 374.739C150.065 360.888 150.065 339.273 150.065 339.273M150.065 374.739C157.023 384.986 165.818 389.558 178.197 389.364C189.746 389.182 204.503 375.835 204.503 375.835M150.065 374.739L151.526 433.97L155.545 525.01L150.795 549.142L154.084 685.52L150.795 690.639V714.039C150.795 714.039 155.927 721.513 161.025 722.814C179.659 727.566 207.791 711.479 205.964 705.995C202.288 694.959 183.677 686.251 183.677 686.251C183.677 686.251 184.336 663.688 185.87 649.323C188.539 624.318 195.257 611.075 197.926 586.07C200.671 560.366 199.388 519.892 199.388 519.892C199.388 519.892 203.764 503.485 205.964 492.835C211.288 467.062 212.312 452.19 214.002 425.926C215.963 395.433 217.755 378.007 214.002 347.682C211.694 329.035 206.663 319.182 204.503 300.517C200.476 265.738 208.156 210.939 208.156 210.939M208.156 210.939L214.002 197.411M208.156 210.939L222.405 275.654C222.405 275.654 224.313 295.671 227.155 308.195C231.551 327.574 244.326 356.092 244.326 356.092C244.326 356.092 240.976 376.496 242.865 389.364C244.498 400.488 251.633 416.785 251.633 416.785C251.633 416.785 254.236 418.537 256.018 418.248C258.111 417.908 260.037 414.592 260.037 414.592L254.922 396.676L264.786 422.27C264.786 422.27 268.083 424.298 269.901 423.367C271.605 422.494 272.093 418.979 272.093 418.979L263.69 396.31L277.574 425.926C277.574 425.926 281.123 426.469 282.689 425.195C284.127 424.023 284.515 420.807 284.515 420.807L273.555 394.117L285.977 419.71C285.977 419.71 290.064 420.464 291.822 418.979C293.443 417.61 293.649 413.86 293.649 413.86L279.4 379.126L289.996 392.654C289.996 392.654 297.303 397.301 300.226 394.482C302.597 392.195 298.764 385.341 298.764 385.341L270.632 352.801C270.632 352.801 269.079 320.608 264.786 300.517C262.123 288.05 256.018 269.073 256.018 269.073C256.018 269.073 256.018 212.766 242.865 176.935C237.264 161.676 232.634 148.532 216.925 144.395C196.099 138.91 172.351 122.823 172.351 122.823V101.251C172.351 101.251 187.696 88.5355 187.696 77.4855C187.696 76.99 187.696 76.5026 187.696 76.0227M113.012 76.0227C113.012 76.0227 102.934 73.8585 102.934 69.0759C102.934 64.3228 102.934 61.0321 102.934 55.5477C102.934 51.1161 111.605 48.2352 111.605 48.2352M113.012 76.0227C112.384 65.4903 111.889 58.0018 111.605 48.2352M111.605 48.2352C111.432 42.2894 111.337 35.4991 111.337 26.6636C111.337 8.0467 132.945 0.163112 151.526 1.06989C168.805 1.91313 187.696 9.35124 187.696 26.6636C187.696 35.7611 187.696 42.4161 187.696 48.2352M187.696 76.0227C187.696 76.0227 197.196 73.6739 197.196 69.0759C197.196 63.5915 197.196 61.7634 197.196 55.5477C197.196 50.864 187.696 48.2352 187.696 48.2352M187.696 76.0227C187.696 64.5905 187.696 57.4641 187.696 48.2352M132.528 224.832C132.528 224.832 141.965 218.081 142.392 211.67C143.123 200.701 142.027 186.807 142.027 186.807M157.372 186.807C157.372 207.575 156.641 203.26 157.372 211.67C157.881 217.535 166.871 223.37 166.871 223.37M150.065 252.62V305.27M113.529 527.57C113.529 527.57 119.467 523.496 123.759 523.548C128.293 523.602 134.355 528.301 134.355 528.301M166.871 528.301C166.871 528.301 172.226 523.392 176.37 523.548C180.527 523.704 185.504 529.032 185.504 529.032M54.7072 270.901C54.7072 270.901 58.758 274.865 62.0143 274.923C65.9315 274.992 70.4174 269.438 70.4174 269.438M232.635 271.266C232.635 271.266 237.489 276.086 241.038 275.288C244.825 274.437 246.884 267.245 246.884 267.245"
        stroke="black"
        strokeWidth="2"
      />
      <Tooltip title="back-head">
        <path
          d="M111 22.6083C111 9.5 132.14 0.905069 149.248 1.0017C166.187 1.09738 187 8 187 25.1351V79.891C187 90.5671 171.105 102 171.105 102H126.895C126.895 102 113.202 90.2067 112.49 79.891C111 58.2975 111 43.228 111 22.6453V22.6083Z"
          name="back-head"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "back-head",
                value: {
                  label: "back-head",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["back-head"]
              ? "fill-[#E52B50]/50 hover:fill-[#E52B50]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-buttock">
        <path
          d="M126.836 388.949C142.843 387.834 149 380.502 149 380.502V358.782L103.03 344C99.9749 349.722 94 366.323 94 375.072C94 375.072 111.971 389.983 126.836 388.949Z"
          name="left-buttock"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-buttock",
                value: {
                  label: "left-buttock",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-buttock"]
              ? "fill-[#FFBF00]/50 hover:fill-[#FFBF00]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-buttock">
        <path
          d="M170.923 389.949C156.585 388.866 153 381.022 153 381.022V358.494L195.955 344C198.81 349.804 204.378 365.895 203.98 375.455C203.98 375.455 184.812 390.999 170.923 389.949Z"
          name="right-buttock"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-buttock",
                value: {
                  label: "right-buttock",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-buttock"]
              ? "fill-[#FFBF00]/50 hover:fill-[#FFBF00]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="back-neck">
        <path
          d="M172.5 103.5H127.5V123.5L172.5 123V103.5Z"
          name="back-neck"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "back-neck",
                value: {
                  label: "back-neck",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["back-neck"]
              ? "fill-[#7FFFD4]/50 hover:fill-[#7FFFD4]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-back-elbow">
        <path
          d="M44.5 267.5L45.5 245.5L83 251L76.5 275L75 289.5L38.5 283.5L44.5 267.5Z"
          name="left-back-elbow"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-back-elbow",
                value: {
                  label: "left-back-elbow",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-back-elbow"]
              ? "fill-[#007FFF]/50 hover:fill-[#007FFF]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-back-elbow">
        <path
          d="M256.5 268.25L255.5 246L218 251.562L224.5 275.835L226 290.5L262.5 284.432L256.5 268.25Z"
          name="right-back-elbow"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-back-elbow",
                value: {
                  label: "right-back-elbow",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-back-elbow"]
              ? "fill-[#007FFF]/50 hover:fill-[#007FFF]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-hip">
        <path
          d="M145.5 312.5L95.5 310C95.5 310 91.863 319.661 90 326C84.7591 343.833 82.5 373 82.5 373L84.5 415.5C86.8333 406.667 91.5 386.3 91.5 375.5C91.5 364.7 98.8333 349 102.5 342.5L145.5 312.5Z"
          name="left-hip"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-hip",
                value: {
                  label: "left-hip",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-hip"]
              ? "fill-[#FFE4C4]/50 hover:fill-[#FFE4C4]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-hip">
        <path
          d="M152 312.496L202 310C202 310 205.637 319.644 207.5 325.973C212.741 343.775 215 372.893 215 372.893L213 415.321C210.667 406.502 206 386.17 206 375.389C206 364.607 198.667 348.934 195 342.445L152 312.496Z"
          name="right-hip"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-hip",
                value: {
                  label: "right-hip",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-hip"]
              ? "fill-[#FFE4C4]/50 hover:fill-[#FFE4C4]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="upper-back">
        <path
          d="M212 195.5L204 172H96.5L88 199.5L96.5 233.5H204L212 195.5Z"
          name="upper-back"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "upper-back",
                value: {
                  label: "upper-back",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["upper-back"]
              ? "fill-[#FF00FF]/50 hover:fill-[#FF00FF]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="Lower Back">
        <path
          d="M95.5 308.5C98.1667 292.333 98.1667 252.167 95.5 236H205C203.167 251.833 203.167 292.667 205 308.5H95.5Z"
          name="Lower Back"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "Lower Back",
                value: {
                  label: "Lower Back",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["Lower Back"]
              ? "fill-[#C3B091]/50 hover:fill-[#C3B091]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="spinal-column">
        <path
          d="M172 124H128L136 310H168.5L172 124Z"
          name="spinal-column"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "spinal-column",
                value: {
                  label: "spinal-column",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["spinal-column"]
              ? "fill-[#50C878]/50 hover:fill-[#50C878]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-back-knee">
        <path
          d="M101.5 520L96.5 499.5H146.5L145.5 522.5L149 543H99.5L101.5 520Z"
          name="left-back-knee"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-back-knee",
                value: {
                  label: "left-back-knee",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-back-knee"]
              ? "fill-[#4B0082]/50 hover:fill-[#4B0082]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-back-knee">
        <path
          d="M199.5 519.421L204.5 499H154.5L155.5 521.912L152 542.333H201.5L199.5 519.421Z"
          name="right-back-knee"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-back-knee",
                value: {
                  label: "right-back-knee",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-back-knee"]
              ? "fill-[#4B0082]/50 hover:fill-[#4B0082]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
    </svg>
  );
};

export default BackBody;
