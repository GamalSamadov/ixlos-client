import styles from './BackgroundEllipsis.module.scss'

export const BackgroundEllipsis = () => {
  return (
    <>
      <svg
        className={styles.ellipsis_one}
        width="810"
        height="810"
        viewBox="0 0 810 810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_301_802)">
          <circle
            cx="405"
            cy="405"
            r="297"
            fill="url(#paint0_linear_301_802)"
            fillOpacity="0.68"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_301_802"
            x="0"
            y="0"
            width="810"
            height="810"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="54"
              result="effect1_foregroundBlur_301_802"
            />
          </filter>
          <linearGradient
            id="paint0_linear_301_802"
            x1="405"
            y1="108"
            x2="405"
            y2="702"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#65D6FC" />
            <stop offset="1" stopColor="#5E17EB" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className={styles.ellipsis_two}
        width="810"
        height="810"
        viewBox="0 0 810 810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_301_802)">
          <circle
            cx="405"
            cy="405"
            r="297"
            fill="url(#paint0_linear_301_802)"
            fillOpacity="0.68"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_301_802"
            x="0"
            y="0"
            width="810"
            height="810"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="54"
              result="effect1_foregroundBlur_301_802"
            />
          </filter>
          <linearGradient
            id="paint0_linear_301_802"
            x1="405"
            y1="108"
            x2="405"
            y2="702"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#65D6FC" />
            <stop offset="1" stopColor="#5E17EB" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}
