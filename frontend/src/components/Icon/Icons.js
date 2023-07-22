export const Search = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 15L21 21"
          stroke="#323232"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="#323232"
          stroke-width="2"
        />
      </svg>
    </>
  );
};

export const Message = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
        />
      </svg>
    </>
  );
};

export const Notification = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
        />
      </svg>
    </>
  );
};

export const Feed = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="feedIconTitle"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        color="#000000"
      >
        <title id="feedIconTitle">Feed</title>
        <circle cx="7.5" cy="7.5" r="2.5" /> <path d="M22 13H2" />
        <path d="M18 6h-5m5 3h-5" />
        <path d="M5 2h14a3 3 0 0 1 3 3v17H2V5a3 3 0 0 1 3-3z" />
      </svg>
    </>
  );
};

export const Network = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="cls-1" cx="12" cy="12" r="1.91" />
        <path
          class="cls-1"
          d="M9.14,16.77h0A2.86,2.86,0,0,1,12,13.91h0a2.86,2.86,0,0,1,2.86,2.86h0"
        />
        <circle class="cls-1" cx="20.59" cy="3.41" r="1.91" />
        <circle class="cls-1" cx="3.41" cy="20.59" r="1.91" />
        <circle class="cls-1" cx="20.11" cy="20.11" r="2.39" />
        <circle class="cls-1" cx="3.89" cy="3.89" r="2.39" />
        <line class="cls-1" x1="7.95" y1="16.05" x2="4.75" y2="19.25" />
        <line class="cls-1" x1="19.25" y1="4.75" x2="16.05" y2="7.95" />
        <path
          class="cls-1"
          d="M17.73,12a5.74,5.74,0,1,1-1.68-4A5.69,5.69,0,0,1,17.73,12Z"
        />
        <line class="cls-1" x1="18.42" y1="18.42" x2="16.05" y2="16.05" />
        <line class="cls-1" x1="7.95" y1="7.95" x2="5.58" y2="5.58" />
      </svg>
    </>
  );
};

export const Video = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 7V18C21 19.6569 19.6569 21 18 21H7"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 12V8L12.1429 10L9 12Z"
          fill="#000000"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export const Event = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g fill="#000000" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M8.675 4.173a.75.75 0 00-1.35 0l-1.14 2.359-2.546.38a.75.75 0 00-.418 1.273l1.85 1.84-.437 2.6a.75.75 0 001.094.786L8 12.19l2.272 1.22a.75.75 0 001.094-.785l-.437-2.602 1.85-1.839a.75.75 0 00-.418-1.273l-2.545-.38-1.14-2.359zM7.362 7.542L8 6.222l.638 1.32a.75.75 0 00.565.415l1.459.218-1.066 1.059a.75.75 0 00-.21.656l.247 1.476-1.278-.686a.75.75 0 00-.71 0l-1.278.686.248-1.476a.75.75 0 00-.211-.656l-1.066-1.06 1.46-.217a.75.75 0 00.564-.415z" />

          <path d="M12 .75a.75.75 0 00-1.5 0V1h-5V.75a.75.75 0 00-1.5 0V1H2.25A2.25 2.25 0 000 3.25v10.5A2.25 2.25 0 002.25 16h11.5A2.25 2.25 0 0016 13.75V3.25A2.25 2.25 0 0013.75 1H12V.75zm-8 2.5V2.5H2.25a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75V3.25a.75.75 0 00-.75-.75H12v.75a.75.75 0 01-1.5 0V2.5h-5v.75a.75.75 0 01-1.5 0z" />
        </g>
      </svg>
    </>
  );
};

export const Heart = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 -0.5 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.4997 18.9911L9.5767 15.9911L6.6767 12.9911C5.10777 11.3331 5.10777 8.73809 6.6767 7.08009C7.44494 6.34175 8.48548 5.95591 9.54937 6.01489C10.6133 6.07387 11.6048 6.57236 12.2867 7.39109L12.4997 7.60009L12.7107 7.38209C13.3926 6.56336 14.3841 6.06487 15.448 6.00589C16.5119 5.94691 17.5525 6.33275 18.3207 7.07109C19.8896 8.72909 19.8896 11.3241 18.3207 12.9821L15.4207 15.9821L12.4997 18.9911Z"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export const Comment = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.663 3.04094 17.0829 4.73812 18.875L2.72681 21.1705C2.44361 21.4937 2.67314 22 3.10288 22H12Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export const Share = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.68439 10.6578L15.3124 7.34378M15.3156 16.6578L8.69379 13.3469M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
          stroke="#000000"
          stroke-width="1.5"
        />
      </svg>
    </>
  );
};

export const LinkIcon = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Interface / Link">
          <path
            id="Vector"
            d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </>
  );
};
export const Emoji = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 14C9.18131 14.4723 9.47841 14.8915 9.864 15.219C11.0903 16.2483 12.8748 16.2613 14.116 15.25C14.5069 14.9283 14.8109 14.5136 15 14.044"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12Z"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 11V10"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M15 11V10"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
};
export const Image = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Media / Image_02">
          <path
            id="Vector"
            d="M3.00005 18.0001C3 17.9355 3 17.8689 3 17.8002V6.2002C3 5.08009 3 4.51962 3.21799 4.0918C3.40973 3.71547 3.71547 3.40973 4.0918 3.21799C4.51962 3 5.08009 3 6.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21 4.5192 21 5.07899 21 6.19691V17.8031C21 18.2881 21 18.6679 20.9822 18.9774M3.00005 18.0001C3.00082 18.9884 3.01337 19.5058 3.21799 19.9074C3.40973 20.2837 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8036C18.9215 21 19.4805 21 19.9079 20.7822C20.2842 20.5905 20.5905 20.2837 20.7822 19.9074C20.9055 19.6654 20.959 19.3813 20.9822 18.9774M3.00005 18.0001L7.76798 12.4375L7.76939 12.436C8.19227 11.9426 8.40406 11.6955 8.65527 11.6064C8.87594 11.5282 9.11686 11.53 9.33643 11.6113C9.58664 11.704 9.79506 11.9539 10.2119 12.4541L12.8831 15.6595C13.269 16.1226 13.463 16.3554 13.6986 16.4489C13.9065 16.5313 14.1357 16.5406 14.3501 16.4773C14.5942 16.4053 14.8091 16.1904 15.2388 15.7607L15.7358 15.2637C16.1733 14.8262 16.3921 14.6076 16.6397 14.5361C16.8571 14.4734 17.0896 14.4869 17.2988 14.5732C17.537 14.6716 17.7302 14.9124 18.1167 15.3955L20.9822 18.9774M20.9822 18.9774L21 18.9996M15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </>
  );
};
export const Send = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.3938 2.20468C3.70395 1.96828 4.12324 1.93374 4.4679 2.1162L21.4679 11.1162C21.7953 11.2895 22 11.6296 22 12C22 12.3704 21.7953 12.7105 21.4679 12.8838L4.4679 21.8838C4.12324 22.0662 3.70395 22.0317 3.3938 21.7953C3.08365 21.5589 2.93922 21.1637 3.02382 20.7831L4.97561 12L3.02382 3.21692C2.93922 2.83623 3.08365 2.44109 3.3938 2.20468ZM6.80218 13L5.44596 19.103L16.9739 13H6.80218ZM16.9739 11H6.80218L5.44596 4.89699L16.9739 11Z"
          fill="#000000"
        />
      </svg>
    </>
  );
};

export const Cancel = ({ size = 24 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="work-case"
            fill="#000000"
            transform="translate(91.520000, 91.520000)"
          >
            <polygon
              id="Close"
              points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
            ></polygon>
          </g>
        </g>
      </svg>
    </>
  );
};
