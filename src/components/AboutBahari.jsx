import React from "react";
import ocean from "../img/beachModel.svg";
import Isometric from "./elements/Isometric";

const AboutBahari = () => {
  return (
    <section
      className="container grid grid-cols-1 items-center justify-between px-4 text-left lg:grid-cols-2 lg:px-20"
      id="about"
    >
      <div className="relative py-32">
        <span className="absolute right-7 top-44">
          <svg
            aria-label="metagrafika"
            width="26"
            height="21"
            viewBox="0 0 26 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.08 0.479997L7.12 14.88L5.8 9.48C7.52 9.48 8.92 9.98 10 10.98C11.08 11.98 11.62 13.36 11.62 15.12C11.62 16.84 11.06 18.24 9.94 19.32C8.86 20.36 7.5 20.88 5.86 20.88C4.18 20.88 2.78 20.36 1.66 19.32C0.58 18.24 0.0400001 16.84 0.0400001 15.12C0.0400001 14.6 0.0800001 14.1 0.16 13.62C0.24 13.1 0.4 12.5 0.64 11.82C0.88 11.14 1.22 10.24 1.66 9.12L5.14 0.479997H11.08ZM25.24 0.479997L21.28 14.88L19.96 9.48C21.68 9.48 23.08 9.98 24.16 10.98C25.24 11.98 25.78 13.36 25.78 15.12C25.78 16.84 25.22 18.24 24.1 19.32C23.02 20.36 21.66 20.88 20.02 20.88C18.34 20.88 16.94 20.36 15.82 19.32C14.74 18.24 14.2 16.84 14.2 15.12C14.2 14.6 14.24 14.1 14.32 13.62C14.4 13.1 14.56 12.5 14.8 11.82C15.04 11.14 15.38 10.24 15.82 9.12L19.3 0.479997H25.24Z"
              fill="#0583D2"
            />
          </svg>
        </span>
        <div className="flex">
          <span className="flex w-max items-center gap-3 rounded-xl border border-accent bg-white px-5 py-3">
            <svg
              aria-label="metagrafika"
              width="34"
              height="26"
              viewBox="0 0 34 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9999 3.08539C20.8469 3.08539 24.3044 4.41331 26.6329 6.8019C28.5489 7.05107 30.3564 7.83348 31.8493 9.05997C29.237 3.57015 23.8259 0.5 16.9999 0.5C10.2671 0.5 4.81869 3.56601 2.17529 9.03926C3.54409 7.92205 5.17692 7.17519 6.91725 6.87026C9.20226 4.37809 12.8027 3.08539 16.9999 3.08539Z"
                fill="#0365A2"
              />
              <path
                d="M25.2868 25.4998C23.1312 25.5023 21.06 24.6622 19.5152 23.1588L19.5111 23.1547C19.3325 23.0206 19.141 22.9047 18.9393 22.8087C18.3322 22.5269 17.6696 22.3846 17.0003 22.3923C16.1426 22.3923 15.4901 22.6057 15.0633 22.8087C14.8609 22.9045 14.6687 23.0204 14.4895 23.1547L14.4853 23.1588C13.5113 24.1045 12.3198 24.7963 11.0157 25.1735C9.71162 25.5507 8.33482 25.6017 7.00637 25.3221C5.67793 25.0424 4.43854 24.4407 3.39717 23.5698C2.3558 22.6989 1.54435 21.5854 1.03417 20.3274C0.523996 19.0693 0.330717 17.7052 0.471331 16.355C0.611944 15.0047 1.08214 13.7097 1.84058 12.5838C2.59902 11.4578 3.62248 10.5355 4.82095 9.8978C6.01942 9.26013 7.3562 8.92668 8.71376 8.92676H25.2868C27.4845 8.92676 29.5922 9.7998 31.1462 11.3538C32.7003 12.9078 33.5733 15.0156 33.5733 17.2133C33.5733 19.411 32.7003 21.5187 31.1462 23.0727C29.5922 24.6267 27.4845 25.4998 25.2868 25.4998Z"
                fill="#0583D2"
                fillOpacity="0.64"
              />
            </svg>
            <h6 className="font-semibold text-primary">Metaverse Wisata Bahari</h6>
          </span>
        </div>
        <p className="mt-12 text-3xl leading-10 text-slate-600">
          Karya &nbsp;
          <span className="relative font-semibold italic text-secondary">
            dunia digital wisata bahari
            <svg
              aria-label="metagrafika"
              className="absolute -bottom-2 left-0 right-0 w-full"
              width="448"
              height="11"
              viewBox="0 0 448 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M447.98 0.413406C445.952 3.06477 439.104 3.20258 433.421 3.40102C407.637 4.29399 381.853 5.29722 355.948 5.74922C319.963 6.38312 283.877 6.75793 247.832 6.87369C216.124 6.97842 184.777 7.56823 153.551 9.17228C138.952 9.92194 123.871 9.78965 108.891 8.86912C77.002 6.91229 45.555 7.53515 14.8309 10.7322C7.60171 11.4819 0.834391 10.6054 0.0311479 8.75335C-0.31023 7.94857 2.22003 6.42169 4.40887 6.27286C17.7025 5.35784 31.197 4.60819 44.7718 4.06249C65.375 3.23566 86.0585 3.48371 106.401 4.64678C126.16 5.77678 145.478 5.04915 164.917 4.15067C198.995 2.57418 233.394 2.68443 267.812 2.5356C307.091 2.36472 346.329 1.71429 385.568 1.15755C403.621 0.903994 421.634 0.358289 439.686 0.00550909C442.317 -0.0441006 445.048 0.253564 448 0.407905L447.98 0.413406Z"
                fill="#047392"
              />
            </svg>
          </span>
          &nbsp; yang dibuat oleh tim metagrafika. Kamu bisa mendapatkan pengalaman berkunjung tanpa datang ke tempat
        </p>
        <span className="absolute right-0">
          <svg
            aria-label="metagrafika"
            width="127"
            height="67"
            viewBox="0 0 127 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.79242 65.1243C3.65985 53.924 5.78928 40.9219 13.4015 32.026C22.0169 21.9577 35.9441 17.7693 48.6373 21.5511C57.0747 24.065 61.8423 32.269 61.8228 40.8453C61.8133 44.9715 59.1823 55.6495 53.6816 55.4603C46.1094 55.1998 43.6949 47.9414 43.8216 41.3807C44.1481 24.48 55.3129 9.14254 71.3728 4.14774C86.9087 -0.684103 101.173 2.434 116.802 3.70086C120.472 3.99834 123.573 4.19149 125.728 1.11702"
              stroke="#0583D2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <div className="flex items-center justify-end">
        <div>
          <Isometric splineUrl="https://prod.spline.design/HwkDRPPoXqsSW9FW/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default AboutBahari;
