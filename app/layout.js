"use client";

import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../app/bootstrap.rtl.css";
import Image from "next/image";
import "../app/globals.css";
import "../app/page.css";

export default function Layout() {
  const [show, setShow] = useState(false);

  const [selectedLang, setSelectedLang] = useState({
    name: "انگلیسی",
    flag: "/en.svg",
  });

  const languages = [
    { name: "انگلیسی", flag: "/en.svg" },
    { name: "چینی", flag: "/cn.svg" },
    { name: "فرانسوی", flag: "/fr.svg" },
    { name: "عربی", flag: "/sa.svg" },
  ];

  const [activeMenu, setActiveMenu] = useState("inbox");

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
  };

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403],
        datasets: [
          {
            label: "Windows",
            data: [39, 54, 48, 51, 30, 24, 42, 36, 54],
            borderColor: "#1781fd",
            backgroundColor: "rgba(0, 0, 255, 0.1)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Mac",
            data: [26, 36, 32, 34, 20, 8, 10, 6, 10],
            borderColor: "#f33e5a",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
        },
        scales: {
          x: {
            title: {
              display: true,
            },
          },
          y: {
            title: {
              display: true,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <html>
      <head>
        <title>Dashboard Management</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="https://bootstrapdemos.wrappixel.com/ample/dist/assets/images/logos/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </head>
      <body>

        {/* Header */}

        <section className="container header">
          <div className="container header-inner">
            <div className="d-flex">
              <a href="#" className="menu-a" data-bs-toggle="offcanvas" data-bs-target="#menu">
                <svg className="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 7H4m11 5H4m5 5H4"></path>
                </svg>
              </a>

              <div className="offcanvas offcanvas-start" id="menu">
                <div className="offcanvas-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a href="#" className="nav-link user-box dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#0">
                        <Image src="/user.jpg" width="30" height="30" layout="responsive" className="user-img" alt="user"></Image>

                        سینا احمدی
                      </a>

                      <div className="collapse" id="0">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">پروفایل من</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">موجودی من</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">پیام‌ های دریافتی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">خروج از حساب</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">شخصی</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="M20 18.415a3 3 0 0 0 .828-.587C22 16.657 22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828c.242.243.514.435.828.587"></path>

                            <path d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427q.08-.003.159 0c.574.03 1.04.496 1.971 1.427c2.026 2.026 3.039 3.039 2.755 3.913a1.5 1.5 0 0 1-.09.218C16.297 21 14.865 21 12 21s-4.298 0-4.715-.819a1.5 1.5 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z"></path>
                          </g>
                        </svg>

                        عمومی
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413c-4.94 4.939-10.945 6.94-13.414 4.471c-2.47-2.47-.468-8.474 4.471-13.413S18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413c4.94 4.939 10.945 6.94 13.414 4.471c2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z"></path>

                            <path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path>
                          </g>
                        </svg>

                        کلاسیک
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5L12 12m0 0L3 7.5m9 4.5v9.5"></path>
                          </g>
                        </svg>

                        تحلیلی
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="M22 22H2"></path>

                            <path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8"></path>

                            <path strokeLinecap="round" d="M12 22v-3M10 5h4m-4 3h4m-4 3h4m-4 3h4"></path>
                          </g>
                        </svg>

                        کارزار
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3.34 17c2.76 4.783 8.876 6.42 13.66 3.66a9.96 9.96 0 0 0 4.196-4.731a9.99 9.99 0 0 0-.536-8.93a9.99 9.99 0 0 0-7.465-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"></path>

                            <path strokeLinecap="round" d="M16.95 20.573S16.01 13.982 14 10.5S7.05 3.427 7.05 3.427"></path>

                            <path strokeLinecap="round" d="M21.864 12.58c-5.411-1.187-12.805 3.768-14.287 8.238m8.837-17.609c-1.488 4.42-8.74 9.303-14.125 8.243"></path>
                          </g>
                        </svg>

                        پیشرفته
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h8"></path>

                            <path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3ZM5 6h11.45c2.055 0 3.083 0 3.528.674c.444.675.04 1.619-.77 3.508l-.429 1c-.378.882-.567 1.322-.942 1.57c-.376.248-.856.248-1.815.248H5"></path>
                          </g>
                        </svg>

                        کسب و کار انلاین
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">اپلیکیشن ها</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539"></path>
                        </svg>

                        تقویم
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M6.448 1.75h.104c.898 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v11.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242V6.448c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M4.405 3.317c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v11c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095v-11c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3C8.112 3.253 7.464 3.25 6.5 3.25s-1.612.002-2.095.067m13.043 7.433h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v2.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-2.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.343-.08 2.242-.08m-2.043 1.566c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094v2c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095v-2c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066s-1.612.002-2.095.066m1.07-10.566c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12c.022.317.07.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h2.05c.445 0 .816 0 1.12-.02a2.8 2.8 0 0 0 .907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm-1.453 1.595c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017h2c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017h-2c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 14.25 5.5c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677"></path>
                        </svg>

                        کانبان
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118c.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.38 2.38 0 0 1 1.676.187A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 9.065-11.1a.75.75 0 1 1 1.47-.3q.213 1.046.215 2.15c0 5.937-4.813 10.75-10.75 10.75c-1.718 0-3.344-.404-4.787-1.122a.9.9 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.9.9 0 0 0-.08-.62A10.7 10.7 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25q1.104.002 2.15.215a.75.75 0 0 1-.3 1.47A9.3 9.3 0 0 0 12 2.75M15.25 5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M19 2.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></path>
                        </svg>

                        اپلیکیشن ‌های ارتباطی
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10.5 22v-2m4 2v-2" opacity="0.5"></path>

                            <path fill="currentColor" d="M11 20v.75h.75V20zm3-.75a.75.75 0 0 0 0 1.5zm3.5-14a.75.75 0 0 0 0 1.5zM7 5.25a.75.75 0 0 0 0 1.5zm2 14a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm-4.75-9.5V20h1.5v-8.75zm.75 8H4.233v1.5H11zm-8.25-1.855V11.25h-1.5v6.145zm1.483 1.855c-.715 0-1.483-.718-1.483-1.855h-1.5c0 1.74 1.231 3.355 2.983 3.355zM6.5 6.75c1.967 0 3.75 1.902 3.75 4.5h1.5c0-3.201-2.246-6-5.25-6zm0-1.5c-3.004 0-5.25 2.799-5.25 6h1.5c0-2.598 1.783-4.5 3.75-4.5zm14.75 6v6.175h1.5V11.25zm-1.457 8H14v1.5h5.793zm1.457-1.825c0 1.12-.757 1.825-1.457 1.825v1.5c1.738 0 2.957-1.601 2.957-3.325zm1.5-6.175c0-3.201-2.246-6-5.25-6v1.5c1.967 0 3.75 1.902 3.75 4.5zM7 6.75h11v-1.5H7zm2 14h6v-1.5H9z"></path>

                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5 16h3"></path>

                            <path stroke="currentColor" strokeLinecap="round" opacity="0.5" strokeWidth="1.5" d="M16 9.884V5.411m0 0V2.635c0-.236.168-.439.4-.484l.486-.093a3.2 3.2 0 0 1 1.755.156l.08.03c.554.214 1.16.254 1.737.115a.44.44 0 0 1 .542.427v2.221a.51.51 0 0 1-.393.499l-.066.016a3.2 3.2 0 0 1-1.9-.125a3.2 3.2 0 0 0-1.755-.156z"></path>
                          </g>
                        </svg>

                        ایمیل
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V10.5a.75.75 0 0 0-1.5 0V12c0 2.378-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176h1.5a.75.75 0 0 0 0-1.5z"></path>

                          <path fill="currentColor" fillRule="evenodd" d="M19 1.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M16.75 5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></path>

                          <path fill="currentColor" d="M6.25 14a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M7 16.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></path>
                        </svg>

                        یادداشت‌ ها
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M5.733 2.043c1.217-1.21 3.221-.995 4.24.367l1.262 1.684c.83 1.108.756 2.656-.229 3.635l-.238.238a.65.65 0 0 0-.008.306c.063.408.404 1.272 1.832 2.692s2.298 1.76 2.712 1.824a.7.7 0 0 0 .315-.009l.408-.406c.876-.87 2.22-1.033 3.304-.444l1.91 1.04c1.637.888 2.05 3.112.71 4.445l-1.421 1.412c-.448.445-1.05.816-1.784.885c-1.81.169-6.027-.047-10.46-4.454c-4.137-4.114-4.931-7.702-5.032-9.47l.749-.042l-.749.042c-.05-.894.372-1.65.91-2.184zm3.04 1.266c-.507-.677-1.451-.731-1.983-.202l-1.57 1.56c-.33.328-.488.69-.468 1.036c.08 1.405.72 4.642 4.592 8.492c4.062 4.038 7.813 4.159 9.263 4.023c.296-.027.59-.181.865-.454l1.42-1.413c.578-.574.451-1.62-.367-2.064l-1.91-1.039c-.528-.286-1.146-.192-1.53.19l-.455.453l-.53-.532c.53.532.529.533.528.533l-.001.002l-.003.003l-.007.006l-.015.014a1 1 0 0 1-.136.106c-.08.053-.186.112-.319.161c-.27.101-.628.155-1.07.087c-.867-.133-2.016-.724-3.543-2.242c-1.526-1.518-2.122-2.66-2.256-3.526c-.069-.442-.014-.8.088-1.07a1.5 1.5 0 0 1 .238-.42l.032-.035l.014-.015l.006-.006l.003-.003l.002-.002l.53.53l-.53-.531l.288-.285c.428-.427.488-1.134.085-1.673z"></path>
                        </svg>

                        دفترچه تلفن
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.263 3.26A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.01c.764.016 1.423.055 1.987.159c.758.14 1.403.404 1.928.93c.602.601.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v6.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.525-.525 1.17-.79 1.928-.929c.564-.104 1.224-.143 1.987-.159m.002 1.5c-.718.016-1.272.052-1.718.134c-.566.104-.895.272-1.138.515c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191v6c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191v-6c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.515c-.446-.082-1-.118-1.718-.133A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99M9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75zM6.25 10.5A.75.75 0 0 1 7 9.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.25 14a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.5 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75"></path>
                        </svg>

                        لیست مخاطبین
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></path>

                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 14.5h8M6 18h5.5"></path>

                            <path stroke="currentColor" strokeWidth="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity="0.5"></path>
                          </g>
                        </svg>

                        صورت حساب
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="9" r="3" opacity="0.5"></circle>

                            <circle cx="12" cy="12" r="10"></circle>

                            <path strokeLinecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"></path>
                          </g>
                        </svg>

                        حساب کاربری
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#1">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685Z"></path>

                            <path strokeLinecap="round" opacity="0.5" d="M14.5 2.315A10.02 10.02 0 0 1 21.685 9.5"></path>
                          </g>
                        </svg>

                        وبلاگ
                      </a>

                      <div className="collapse" id="1">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">پست‌ ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">جزئیات</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#2">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3.321 6.658a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689z"></path>

                            <path strokeLinecap="round" opacity="0.5" d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6"></path>
                          </g>
                        </svg>

                        کسب و کار اینترنتی
                      </a>

                      <div className="collapse" id="2">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">فروشگاه</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">جزئیات</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">فهرست</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">تسویه‌ حساب</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">افزودن محصول</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">ویرایش محصول</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">بخش‌ های وب سایت</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.06.44.075.964.079 1.57c.648.021 1.226.06 1.74.128c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238a18 18 0 0 1 1.74-.128c.004-.606.02-1.13.079-1.57c.084-.627.27-1.194.725-1.65c.456-.455 1.023-.64 1.65-.725c.595-.08 1.345-.08 2.243-.08M8.752 5.252q.567-.003 1.192-.002h4.112q.625 0 1.192.002c-.004-.57-.018-1-.064-1.347c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.046.346-.06.776-.064 1.347M5.71 6.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.027-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M12 9.25a.75.75 0 0 1 .75.75v.01c1.089.274 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.048-2 2.323V18a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.049 2-2.323V10a.75.75 0 0 1 .75-.75"></path>
                        </svg>

                        قیمت‌ گذاری
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>

                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></path>

                            <circle cx="12" cy="17" r="1" fill="currentColor"></circle>
                          </g>
                        </svg>

                        سوالات متداول
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="9" r="3" opacity="0.5"></circle>

                            <circle cx="12" cy="12" r="10"></circle>

                            <path strokeLinecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"></path>
                          </g>
                        </svg>

                        تنظیمات اکانت
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.945 2.25h6.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v5.107c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08H6.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242V8.945c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M5.808 3.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C3.752 6.562 3.75 7.564 3.75 9v5c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h10c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095V9c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H9c-1.435 0-2.437.002-3.192.103M8.25 15a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m-7 6a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"></path>
                        </svg>

                        صفحه لندینگ
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#3">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3.321 6.658a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689z"></path>

                            <path strokeLinecap="round" opacity="0.5" d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6"></path>
                          </g>
                        </svg>

                        ویجت‌ ها
                      </a>

                      <div className="collapse" id="3">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">کارت‌ های بازی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">چارت‌ ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">سربرگ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ویجت‌ های نمایش محتوا</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ویجت‌ های برنامه</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ویجت‌ های داده</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#4">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 8c0-2.828 0-4.243.879-5.121C7.757 2 9.172 2 12 2s4.243 0 5.121.879C18 3.757 18 5.172 18 8v8c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"></path>

                            <path strokeLinecap="round" opacity="0.5" d="M21 4.5v15M3 4.5v15"></path>
                          </g>
                        </svg>

                        چیدمان صفحات
                      </a>

                      <div className="collapse" id="4">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">ساید بار چپ داخلی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ساید بار راست داخلی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">رابط کاربری</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#5">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path opacity="0.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>

                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h8M8 7v3a4 4 0 0 0 8 0V7"></path>
                          </g>
                        </svg>

                        عناصر رابط کاربری
                      </a>

                      <div className="collapse" id="5">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">منوی جمع‌ شونده</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">برچسب</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">دکمه‌ ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">منو های کشویی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">پنجره‌ های پاپ‌ اپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">زبانه</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">توضیح راهنما و پنجره شناور</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">اخطار ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نوار پیشرفت</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">صفحه‌ بندی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">تایپو گرافی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">رابط کاربری بوت‌استرپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مسیر راهنما</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">منوی کناری مخفی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">لیست ‌ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">جدول‌ بندی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">اسلایدر</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نظارت بر اسکرول</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نشانگر بارگذاری</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">لینک</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#6">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M9.94 3.25h4.12c1.841 0 3.3 0 4.44.153c1.175.158 2.125.49 2.875 1.238c1.114 1.112 1.32 2.687 1.375 4.834c.018.736-.564 1.188-1.051 1.316a1.25 1.25 0 0 0 0 2.419c.487.127 1.07.579 1.05 1.315c-.054 2.147-.26 3.722-1.374 4.834c-.75.748-1.7 1.08-2.874 1.238c-1.141.153-2.6.153-4.44.153H9.94c-1.841 0-3.3 0-4.44-.153c-1.175-.158-2.125-.49-2.875-1.238c-1.114-1.112-1.32-2.687-1.375-4.834c-.018-.736.564-1.188 1.051-1.316a1.25 1.25 0 0 0 0-2.419c-.487-.127-1.07-.578-1.05-1.315c.054-2.147.26-3.722 1.374-4.834c.75-.748 1.7-1.08 2.874-1.238C6.641 3.25 8.1 3.25 9.94 3.25M5.699 4.89c-1.008.135-1.59.389-2.014.812c-.628.627-.868 1.576-.93 3.658a2.751 2.751 0 0 1 0 5.28c.062 2.082.302 3.03.93 3.658c.424.423 1.006.677 2.014.812c1.03.138 2.387.14 4.297.14h4.008c1.91 0 3.267-.002 4.297-.14c1.009-.135 1.59-.389 2.014-.812c.628-.627.868-1.576.93-3.658a2.75 2.75 0 0 1-1.98-2.64c0-1.252.837-2.307 1.98-2.64c-.062-2.082-.302-3.03-.93-3.658c-.424-.423-1.006-.677-2.014-.812c-1.03-.138-2.387-.14-4.297-.14H9.996c-1.91 0-3.267.002-4.297.14M12 10.035q-.086.149-.199.353l-.098.176l-.023.04c-.078.144-.208.382-.425.547c-.221.168-.488.226-.643.26l-.044.009l-.19.043c-.176.04-.319.072-.44.103c.079.097.182.219.316.375l.13.153l.03.034c.108.125.282.325.363.585c.08.256.052.52.035.686l-.005.047l-.02.203l-.042.46c.105-.046.223-.1.364-.165l.179-.082l.04-.02c.144-.067.393-.184.672-.184s.528.117.672.185l.04.019l.179.082q.209.098.364.165l-.042-.46l-.02-.203l-.005-.047c-.017-.167-.045-.43.035-.686c.08-.26.255-.46.363-.585l.03-.034l.13-.152c.134-.157.237-.279.316-.376c-.121-.03-.264-.063-.44-.103l-.19-.043l-.043-.01c-.156-.033-.423-.091-.644-.26c-.217-.164-.347-.402-.425-.545l-.023-.041l-.098-.176q-.112-.204-.199-.354M11.014 8.8c.172-.225.484-.55.986-.55s.814.325.986.55c.165.214.33.511.5.816l.023.041l.098.177l.057.1l.099.023l.19.043l.048.01c.327.075.653.148.903.247c.276.109.65.32.795.785c.142.455-.037.841-.193 1.09c-.145.23-.365.486-.59.749l-.03.035l-.13.153l-.082.097l.012.135l.02.203l.004.046c.034.352.067.692.055.964c-.012.286-.08.718-.468 1.011c-.4.304-.84.238-1.12.157c-.258-.073-.562-.214-.87-.355l-.043-.02l-.18-.083l-.084-.039l-.085.04l-.179.082l-.044.02c-.306.141-.61.282-.869.355c-.28.08-.72.147-1.12-.157c-.387-.293-.456-.725-.468-1.01c-.012-.273.02-.613.055-.965l.004-.046l.02-.203l.013-.135l-.083-.097l-.13-.153l-.03-.035c-.225-.263-.445-.52-.59-.75c-.156-.248-.335-.634-.193-1.09c.144-.463.519-.675.795-.784c.25-.099.576-.172.903-.246l.047-.01l.191-.044l.1-.023l.056-.1l.098-.177l.023-.041c.17-.305.335-.602.5-.816"></path>
                        </svg>

                        کارت ها
                      </a>

                      <div className="collapse" id="6">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">کارت‌ های ساده</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">کارت‌ های سفارشی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">کارت‌ های اب ‌و هوا</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">کارت‌ های قابل‌ کشیدن</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#7">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m7.236 6.255c-.605.16-1.42.485-2.594.955c-.542.217-.643.268-.717.333a1 1 0 0 0-.07.07c-.064.073-.115.174-.332.716c-.47 1.174-.794 1.99-.955 2.594c-.167.63-.085.791-.058.83a.8.8 0 0 0 .198.198c.039.027.2.109.83-.058c.605-.16 1.42-.485 2.595-.955c.541-.217.642-.268.716-.333a1 1 0 0 0 .07-.07c.064-.073.115-.174.332-.716c.47-1.174.794-1.99.955-2.594c.167-.63.085-.791.058-.83a.8.8 0 0 0-.198-.198c-.039-.027-.2-.109-.83.058m-.384-1.45c.69-.182 1.436-.271 2.057.15c.234.16.437.363.596.597c.422.621.333 1.367.15 2.057c-.186.705-.546 1.605-.991 2.717l-.02.05l-.034.085c-.163.409-.307.771-.564 1.064a2 2 0 0 1-.208.208c-.293.257-.655.401-1.065.564l-.083.034l-.05.02c-1.113.445-2.013.805-2.718.992c-.69.182-1.436.271-2.057-.15a2.3 2.3 0 0 1-.596-.597c-.422-.621-.333-1.367-.15-2.057c.186-.705.546-1.605.991-2.717l.02-.05l.034-.085c.163-.409.307-.771.564-1.064q.097-.11.208-.208c.293-.257.655-.401 1.065-.564l.083-.034l.05-.02c1.113-.445 2.013-.805 2.718-.992"></path>
                        </svg>

                        عنصر سازنده
                      </a>

                      <div className="collapse" id="7">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">اعلان جذاب</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">ساختار تو‌ در‌ تو</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">اسلایدر مینیمال</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">ارزیابی</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">پیام هشدار فوری</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">فرم های ثبت داده</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#8">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></path>

                            <path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></path>

                            <path strokeLinecap="round" opacity="0.5" d="M8 7h8m-8 3.5h5m6.5 8.5H8"></path>
                          </g>
                        </svg>

                        اجزای فرم
                      </a>

                      <div className="collapse" id="8">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">ورودی فرم ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">دست ه‌بندی ورودی‌ ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">شبکه‌ بندی ورودی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">چک‌ باکس و دکمه‌ های رادیویی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">سوئیچ بوت‌استرپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">انتخابگر پیشرفته</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#9">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M2 16.9c0-1.31 0-1.964.295-2.445a2 2 0 0 1 .66-.66c.48-.295 1.136-.295 2.445-.295h1.1c1.886 0 2.828 0 3.414.586s.586 1.528.586 3.414v1.1c0 1.31 0 1.964-.295 2.445a2 2 0 0 1-.66.66C9.065 22 8.409 22 7.1 22c-1.964 0-2.946 0-3.667-.442a3 3 0 0 1-.99-.99C2 19.845 2 18.864 2 16.9ZM13.5 5.4c0-1.31 0-1.964.295-2.445a2 2 0 0 1 .66-.66C14.935 2 15.591 2 16.9 2c1.964 0 2.946 0 3.668.442a3 3 0 0 1 .99.99C22 4.155 22 5.137 22 7.1c0 1.31 0 1.964-.295 2.445a2 2 0 0 1-.66.66c-.48.295-1.136.295-2.445.295h-1.1c-1.886 0-2.828 0-3.414-.586S13.5 8.386 13.5 6.5z"></path>

                            <path fill="currentColor" d="M16.5 6.25c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166C16.977 5 17.235 5 17.75 5s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166c-.182.129-.44.129-.955.129s-.773 0-.955-.13a.7.7 0 0 1-.166-.165c-.129-.182-.129-.44-.129-.955"></path>

                            <path stroke="currentColor" strokeWidth="1.5" d="M19 13.5h-2c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.337.504-.337 1.207-.337 2.611"></path>

                            <path stroke="currentColor" strokeWidth="1.5" d="M19 13.5h-2c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.337.504-.337 1.207-.337 2.611"></path>

                            <path fill="currentColor" opacity="0.5" d="M12.75 22a.75.75 0 0 0 1.5 0zm0-3v3h1.5v-3z"></path>

                            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M17 22h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 20.398 22 19.932 22 19"></path>

                            <path fill="currentColor" d="M22.75 13.5a.75.75 0 0 0-1.5 0zm0 3.5v-3.5h-1.5V17z"></path>

                            <path stroke="currentColor" strokeWidth="1.5" d="M2 7.1c0-1.964 0-2.946.442-3.667a3 3 0 0 1 .99-.99C4.155 2 5.137 2 7.1 2c1.31 0 1.964 0 2.445.295a2 2 0 0 1 .66.66c.295.48.295 1.136.295 2.445v1.1c0 1.886 0 2.828-.586 3.414S8.386 10.5 6.5 10.5H5.4c-1.31 0-1.964 0-2.445-.295a2 2 0 0 1-.66-.66C2 9.065 2 8.409 2 7.1Z"></path>

                            <path fill="currentColor" opacity="0.5" d="M5 6.25c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166C5.477 5 5.735 5 6.25 5s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166c-.182.129-.44.129-.955.129s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 7.023 5 6.765 5 6.25m0 11.5c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166c.182-.129.44-.129.955-.129s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166C7.023 19 6.765 19 6.25 19s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 18.523 5 18.265 5 17.75m11 0c0-.702 0-1.053.169-1.306a1 1 0 0 1 .275-.275C16.697 16 17.048 16 17.75 16s1.053 0 1.306.169a1 1 0 0 1 .275.275c.169.253.169.604.169 1.306s0 1.053-.169 1.306a1 1 0 0 1-.275.275c-.253.169-.604.169-1.306.169s-1.053 0-1.306-.169a1 1 0 0 1-.275-.275C16 18.803 16 18.452 16 17.75"></path>
                          </g>
                        </svg>

                        ابزار های جانبی فرم
                      </a>

                      <div className="collapse" id="9">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">اپلود فایل</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">قالب‌ بندی ورودی فرم</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">تکمیل خودکار فرم</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#10">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.5"></circle>

                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 7v6"></path>

                            <circle cx="12" cy="16" r="1" fill="currentColor"></circle>
                          </g>
                        </svg>

                        اعتبار سنجی فرم
                      </a>

                      <div className="collapse" id="10">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">اعتبار سنجی بوت‌ استرپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">اعتبار سنجی سفارشی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#11">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592q-.22.282-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558q-.282.22-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938"></path>

                            <path strokeLinecap="round" d="M8 13h2.5M8 9h6.5M8 17h1.5"></path>

                            <path opacity="0.5" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></path>
                          </g>
                        </svg>

                        انتخاب‌ کننده فرم
                      </a>

                      <div className="collapse" id="11">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">انتخابگر رنگ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">انتخابگر محدوده بوت‌ استرپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">انتخابگر تاریخ بوت‌ استرپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">انتخابگر تاریخ متریال</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#12">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z"></path>

                            <path opacity="0.5" d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309"></path>

                            <path strokeLinecap="round" d="m11.777 10l4.83 1.294"></path>

                            <path strokeLinecap="round" opacity="0.5" d="m11 12.898l2.898.776"></path>
                          </g>
                        </svg>

                        ویرایش کننده فرم
                      </a>

                      <div className="collapse" id="12">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">ویرایشگر متن پیشرفته</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ادیتور متنی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></path>

                            <path strokeLinecap="round" d="M8 12h8M8 8h8m-8 8h5"></path>
                          </g>
                        </svg>

                        فرم استاندارد
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M11.945 1.25h.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.4.4.648.869.805 1.402c.485.002.897.008 1.246.037c.463.037.882.118 1.273.317a3.25 3.25 0 0 1 1.42 1.42c.199.391.28.81.317 1.273c.037.448.037.998.037 1.672v7.062c0 .674 0 1.225-.037 1.672c-.037.463-.118.882-.317 1.273a3.25 3.25 0 0 1-1.42 1.42c-.391.199-.81.28-1.273.317c-.35.029-.761.035-1.246.037c-.157.533-.405 1.002-.805 1.402c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982c-.4-.4-.648-.869-.805-1.402a17 17 0 0 1-1.246-.037c-.463-.037-.882-.118-1.272-.317a3.25 3.25 0 0 1-1.42-1.42c-.2-.391-.28-.81-.318-1.273c-.037-.447-.037-.998-.037-1.672V8.47c0-.674 0-1.224.037-1.672c.037-.463.118-.882.317-1.272a3.25 3.25 0 0 1 1.42-1.42c.391-.2.81-.28 1.273-.318c.35-.029.761-.035 1.246-.037c.157-.533.405-1.002.805-1.402c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M5.303 5.252c-.358.002-.643.01-.884.03c-.37.03-.57.085-.713.159a1.75 1.75 0 0 0-.765.765c-.074.144-.13.343-.16.713c-.03.38-.031.869-.031 1.581v7c0 .712 0 1.202.032 1.58c.03.371.085.57.159.715c.168.329.435.596.765.764c.144.074.343.13.713.16c.24.02.526.026.884.03c-.053-.751-.053-1.645-.053-2.694v-8.11c0-1.05 0-1.943.053-2.693M18.75 7.945c0-1.05 0-1.943-.053-2.693c.358.002.643.01.884.03c.37.03.57.085.713.159c.33.168.598.435.765.765c.074.144.13.343.16.713c.03.38.031.869.031 1.581v7c0 .712 0 1.202-.032 1.58c-.03.371-.085.57-.159.715a1.75 1.75 0 0 1-.765.764c-.144.074-.343.13-.713.16c-.24.02-.526.026-.884.03c.053-.751.053-1.645.053-2.694zM8.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C6.752 5.562 6.75 6.564 6.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103s2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103s-2.437.002-3.192.103"></path>
                        </svg>

                        فرم عمودی
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3m6.698 4.25h8.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08H7.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M5.905 8.817c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095s.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h8c.964 0 1.612-.002 2.095-.066c.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066H8c-.964 0-1.612.002-2.095.067M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"></path>
                        </svg>

                        فرم افقی
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M17 7.25a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-.75-.75M6.25 12c0 .414.336.75.75.75h5.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H7a.75.75 0 0 0-.75.75"></path>

                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62"></path>
                        </svg>

                        اقدامات فرم
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="M20 7H4"></path>

                            <path d="M20 12H4" opacity="0.5"></path>

                            <path d="M20 17H4"></path>
                          </g>
                        </svg>

                        جدا کننده ردیف
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z"></path>

                            <path strokeLinecap="round" d="M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"></path>
                          </g>
                        </svg>

                        فرم دارای حاشیه
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></path>

                            <path strokeLinecap="round" d="M9 13h6M9 9h6m-6 8h3M2 19V5m20 14V5"></path>
                          </g>
                        </svg>

                        جزئیات تکمیلی فرم
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M13 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>

                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84v2.112q.002.992-.007 1.84a.8.8 0 0 1-.003.23c-.016.907-.053 1.69-.143 2.363c-.158 1.172-.49 2.121-1.238 2.87c-.464.464-1.005.768-1.629.97q.02.082.02.171V22a.75.75 0 0 1-1.5 0v-1.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-1.5q0-.09.02-.172c-.624-.201-1.165-.505-1.629-.97c-.748-.748-1.08-1.697-1.238-2.869c-.09-.673-.127-1.456-.143-2.363a.8.8 0 0 1-.003-.23q-.009-.848-.007-1.84V9.944q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.192 7.5Q2.75 9.332 2.75 10v2q0 .668.002 1.25h18.496q.002-.582.002-1.25v-2q0-.668-.002-1.25zm18.472-1.5H2.776c.02-.587.054-1.094.114-1.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.06.445.094.952.114 1.539m0 7.5H2.776c.02.587.054 1.094.114 1.54c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.06-.445.094-.952.114-1.539"></path>
                        </svg>

                        سطر های متناوب رنگی
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M5.55 3.614l.048.035l1.606 1.146c.287.206.542.387.743.56c.217.187.411.396.554.673c.142.277.2.556.225.842c.024.264.024.577.024.93v8.4c0 .353 0 .666-.024.93a2.2 2.2 0 0 1-.225.842a2.2 2.2 0 0 1-.554.673c-.201.173-.456.355-.743.56L5.55 20.386c-.651.465-1.208.863-1.671 1.1c-.473.243-1.074.438-1.68.127c-.605-.312-.796-.915-.873-1.44c-.076-.516-.076-1.2-.076-2V5.827c0-.8 0-1.483.076-1.999c.077-.525.268-1.128.873-1.44c.606-.312 1.207-.116 1.68.126c.463.238 1.02.636 1.67 1.1m-2.693.115q-.001-.002.013-.002zm.033 0c.044.007.136.033.304.12c.353.18.82.51 1.533 1.02L6.307 6c.32.227.518.37.661.493a.8.8 0 0 1 .199.222a.8.8 0 0 1 .065.291c.017.188.018.433.018.825v8.34c0 .392 0 .637-.018.825a.8.8 0 0 1-.065.29a.8.8 0 0 1-.199.223a10 10 0 0 1-.66.493l-1.581 1.13c-.714.51-1.18.84-1.533 1.02a1.1 1.1 0 0 1-.304.12c-.02-.04-.053-.13-.08-.317c-.058-.393-.06-.964-.06-1.84V5.886c0-.876.002-1.448.06-1.84c.027-.187.06-.277.08-.317m-.033 16.542l.013.002q-.015 0-.013-.002m.043.017l.009.01zm0-16.576q.008-.011.009-.01t-.01.01m17.906.136c-.353.181-.82.512-1.533 1.021L17.694 6a10 10 0 0 0-.661.493a.8.8 0 0 0-.199.222a.8.8 0 0 0-.065.291c-.017.188-.018.433-.018.825v8.34c0 .392 0 .637.018.825a.8.8 0 0 0 .065.29a.8.8 0 0 0 .199.223c.143.123.341.266.66.493l1.581 1.13c.714.51 1.18.84 1.533 1.02a1.1 1.1 0 0 0 .304.12a1.1 1.1 0 0 0 .08-.317c.058-.393.06-.964.06-1.84V5.886c0-.876-.002-1.448-.06-1.84a1.1 1.1 0 0 0-.08-.317a1.1 1.1 0 0 0-.304.12m.337-.12h-.013zm-.043-.016l-.009-.01l.01.01m-.009 16.586l.01-.01zm.039-.025q.012-.003.013-.002q.001.002-.013.002m-1.009-17.76c.473-.242 1.074-.438 1.68-.126s.796.915.873 1.44c.076.516.076 1.2.076 2v12.347c0 .8 0 1.483-.076 1.999c-.077.525-.268 1.128-.873 1.44c-.606.311-1.207.116-1.68-.127c-.463-.237-1.02-.635-1.67-1.1l-1.655-1.181a11 11 0 0 1-.742-.56a2.2 2.2 0 0 1-.555-.673a2.2 2.2 0 0 1-.225-.842c-.024-.264-.024-.577-.024-.93V7.8c0-.353 0-.666.024-.93c.026-.286.083-.565.225-.842s.337-.486.554-.673c.201-.173.456-.354.743-.56l1.654-1.181c.651-.465 1.208-.863 1.671-1.1M12 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m0 8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"></path>
                        </svg>

                        ورودی شناور فرم
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M8 18h8"></path>

                            <path d="m15.124 5.52l.425.071a2 2 0 0 1 1.528 2.716l-.666 1.664a1.27 1.27 0 0 1-1.486.76a12.06 12.06 0 0 0-5.85 0a1.27 1.27 0 0 1-1.487-.76l-.665-1.664A2 2 0 0 1 8.45 5.59l.425-.07A19 19 0 0 1 11 5.287m-.82 4.642l-.675-1.883"></path>
                          </g>
                        </svg>

                        فرم چند مرحله ای
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="M9 9h6m-3 6V9"></path>

                            <path d="M6 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></path>

                            <path strokeLinecap="round" d="M6 20h12m0-16H6m14 14V6M4 6v12"></path>
                          </g>
                        </svg>

                        فرم تکرار شونده
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">لیست جدول بندی شده</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#13">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></path>

                            <path strokeLinecap="round" d="M15 21V3"></path>
                          </g>
                        </svg>

                        جدول بوت استرپ
                      </a>

                      <div className="collapse" id="13">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">جدول ساده</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">جدول دارک بیسیک</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">جدول با ابعاد متغیر</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">جدول با رنگ‌ بندی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#14">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>

                            <path strokeLinecap="round" opacity="0.5" d="M15 17H9"></path>
                          </g>
                        </svg>

                        جدول های تعاملی
                      </a>

                      <div className="collapse" id="14">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">راه‌اندازی اولیه</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">رابط برنامه ‌نویسی کاربردی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">راه‌اندازی پیشرفته</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">نمودار ها</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#15">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path fill="#none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 3.34 7M14.5 2.315A10.02 10.02 0 0 1 21.685 9.5"></path>
                          </g>
                        </svg>

                        نمودار های پیشرفته
                      </a>

                      <div className="collapse" id="15">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار خطی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار ناحیه‌ ای</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار میله‌ ای</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار دایره‌ ای</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار شعاعی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار راداری</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">نمونه صفحات وب</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#16">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16zm0-3.924c-.975.096-1.631.313-2.121.803C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121c.49.49 1.146.707 2.121.803M19 4.076c.975.096 1.631.313 2.121.803C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121c-.49.49-1.146.707-2.121.803"></path>

                            <path strokeLinecap="round" d="M9 13h6M9 9h6m-6 8h3"></path>
                          </g>
                        </svg>

                        صفحه پیش فرض
                      </a>

                      <div className="collapse" id="16">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">انیمیشن</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نتیجه جستجو</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">گالری</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ساختار درختی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">بلاک‌ کردن رابط کاربری</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">پایان زمان جلسه</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">نماد ها</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12Z"></path>

                            <path strokeLinecap="round" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828c.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293S2 4.057 2 5s0 1.414.293 1.707S3.057 7 4 7h16c.943 0 1.414 0 1.707-.293S22 5.943 22 5s0-1.414-.293-1.707S20.943 3 20 3h-4"></path>
                          </g>
                        </svg>

                        ایکون های داده ای
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M2 12c0 5.523 4.477 10 10 10c.648 0 1.25-.3 1.708-.758l7.534-7.534C21.7 13.25 22 12.648 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z"></path>

                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 17c-1.115 0-2.15-.37-3-1"></path>

                            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor"></ellipse>

                            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor"></ellipse>

                            <path stroke="currentColor" strokeWidth="1.5" d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"></path>
                          </g>
                        </svg>

                        ایکون های نجومی
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">ورود و ثبت نام</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M14 21.71A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938V15a6.98 6.98 0 0 1-2 4.899"></path>

                            <path fill="currentColor" d="M8.25 7.5a.75.75 0 0 0-1.5 0zm-.615-2.917a.75.75 0 1 0 1.246.834zM17.25 8.5v-1h-1.5v1zm-10.5-1v1h1.5v-1zm10.5 0c0-2.9-2.35-5.25-5.25-5.25v1.5a3.75 3.75 0 0 1 3.75 3.75zM12 2.25a5.25 5.25 0 0 0-4.365 2.333l1.246.834A3.75 3.75 0 0 1 12 3.75z"></path>

                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15"></path>
                          </g>
                        </svg>

                        خطا
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#17">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path strokeLinejoin="round" d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"></path>

                            <path opacity="0.5" d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121"></path>
                          </g>
                        </svg>

                        ورود به سیستم
                      </a>

                      <div className="collapse" id="17">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">انیمیشن</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نتیجه جستجو</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">گالری</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ساختار درختی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">بلاک‌ کردن رابط کاربری</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">پایان زمان جلسه</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#18">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="9" r="3" opacity="0.5"></circle>

                            <circle cx="12" cy="12" r="10"></circle>

                            <path strokeLinecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"></path>
                          </g>
                        </svg>

                        عضویت
                      </a>

                      <div className="collapse" id="18">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">رجیستر در ساید بار</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ثبت‌ نام جعبه‌ ای</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#19">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12.079 2.25c-4.794 0-8.734 3.663-9.118 8.333H2a.75.75 0 0 0-.528 1.283l1.68 1.666a.75.75 0 0 0 1.056 0l1.68-1.666a.75.75 0 0 0-.528-1.283h-.893c.38-3.831 3.638-6.833 7.612-6.833a7.66 7.66 0 0 1 6.537 3.643a.75.75 0 1 0 1.277-.786A9.16 9.16 0 0 0 12.08 2.25"></path>

                          <path fill="currentColor" opacity=".5" d="M20.841 10.467a.75.75 0 0 0-1.054 0L18.1 12.133a.75.75 0 0 0 .527 1.284h.899c-.381 3.83-3.651 6.833-7.644 6.833a7.7 7.7 0 0 1-6.565-3.644a.75.75 0 1 0-1.276.788a9.2 9.2 0 0 0 7.84 4.356c4.809 0 8.766-3.66 9.151-8.333H22a.75.75 0 0 0 .527-1.284z"></path>
                        </svg>

                        فراموشی رمز عبور
                      </a>

                      <div className="collapse" id="19">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">بازیابی رمز در ساید بار</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">فرم بازنشانی رمز باکس‌ شده</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#20">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path fill="currentColor" opacity="0.5" d="M12.75 2a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V2zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5v-1z"></path>

                            <path stroke="currentColor" strokeWidth="1.5" d="M6.704 3.5H17.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C21 4.893 21 5.596 21 7s0 2.107-.337 2.611a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.704c-.658 0-.986 0-1.288-.098a2 2 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894c-.85-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974c.44-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099Zm10.592 9H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098q.2-.066.383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099Z"></path>

                            <path fill="currentColor" opacity="0.5" d="M12.75 20a.75.75 0 0 0-1.5 0zM14 22.75a.75.75 0 0 0 0-1.5zm-4-1.5a.75.75 0 0 0 0 1.5zM11.25 20v2h1.5v-2zM14 21.25h-4v1.5h4z"></path>

                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" opacity="0.5" d="M9 7h6m-6 9h6"></path>
                          </g>
                        </svg>

                        احراز هویت دو مرحله ای
                      </a>

                      <div className="collapse" id="20">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">تایید دو مرحله‌ ای جانبی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ورود دو مرحله‌ ای کادر بندی‌ شده</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="3"></circle>

                            <path d="M13.765 2.152C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7s-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453s.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.62 1.62 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"></path>
                          </g>
                        </svg>

                        سرویس و تعمیرات
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">مستندات</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path>

                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 8v4"></path>

                            <circle cx="12" cy="15" r="1" fill="currentColor"></circle>
                          </g>
                        </svg>

                        نحوه راه اندازی
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link nav-text">سایر موارد</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#21">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></path>

                            <path strokeLinecap="round" opacity="0.5" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16"></path>
                          </g>
                        </svg>

                        لایه بندی منو
                      </a>

                      <div className="collapse" id="21">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۱</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۱.۱</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۲</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۲.۱</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۳</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۳.۱</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" opacity="0.5" d="m18.5 5.5l-13 13"></path>

                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>

                        مسدود شده
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                        </svg>

                        زیر نویس
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path opacity="0.5" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path>

                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12.4l1.429 1.6l3.571-4"></path>
                          </g>
                        </svg>

                        تراشه
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7.147 3.553a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049"></path>

                          <path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></path>
                        </svg>

                        مشخص‌ شده
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6s4.243 0 5.121.879C14 7.757 14 9.172 14 12"></path>

                            <path d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18s4.243 0 5.121-.879C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6"></path>
                          </g>
                        </svg>

                        لینک به منبع خارجی
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="messages">
                <a href="#notification">
                  <svg className="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></path>

                      <path strokeLinecap="round" opacity="0.5" d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3M12 6v4"></path>
                    </g>
                  </svg>
                </a>

                <div id="notification" className="modal">
                  <div className="container all-notification red-notification">
                    <div className="fw-bold">اعلان‌ ها</div>

                    <div className="fw-medium">شما ۴ اعلان جدید دارید</div>
                  </div>

                  <div className="container white-notification">
                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-blue">
                        <svg className="blue svg-size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" opacity="0.5" d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z"></path>

                            <path d="M21.5 6.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z"></path>
                          </g>
                        </svg>
                      </span>

                      <h6 className="mb-0 color-dark">شروع مدیریت</h6>

                      <span className="color-gray-1">۹:۳۰ صبح</span>

                      <span className="color-gray">فقط به مدیر جدید من نگاه کن</span>
                    </a>

                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-red">
                        <svg className="red svg-size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></path>

                            <path strokeLinecap="round" opacity="0.5" d="M7 4V2.5M17 4V2.5M2 9h20"></path>

                            <circle cx="16.5" cy="16.5" r="1.5"></circle>
                          </g>
                        </svg>
                      </span>

                      <h6 className="mb-0 color-dark">رویداد امروز</h6>

                      <span className="color-gray-1">۹:۱۰ صبح</span>

                      <span className="color-gray">فقط برای یاداوری که شما برنامه دارید</span>
                    </a>

                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-yellow">
                        <svg className="yellow svg-size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="M14 12a6 6 0 1 1-6-6"></path>

                            <path opacity="0.5" d="M10 12a6 6 0 1 1 6 6"></path>
                          </g>
                        </svg>
                      </span>

                      <h6 className="mb-0 color-dark">اجرای مدیریت</h6>

                      <span className="color-gray-1">۹:۳۰ صبح</span>

                      <span className="color-gray">فقط مدیر جدید من را ببین</span>
                    </a>

                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-green">
                        <svg className="green svg-size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></path>

                            <path strokeLinecap="round" opacity="0.5" d="M7 4V2.5M17 4V2.5M2 9h20"></path>

                            <circle cx="16.5" cy="16.5" r="1.5"></circle>
                          </g>
                        </svg>
                      </span>

                      <h6 className="mb-0 color-dark">رویداد امروز</h6>

                      <span className="color-gray-1">۹:۱۰ صبح</span>

                      <span className="color-gray">فقط برای یاداوری که شما برنامه دارید</span>
                    </a>

                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-light-blue">
                        <svg className="light-blue svg-size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path opacity="0.5" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792z"></path>

                            <circle cx="12" cy="12" r="3"></circle>
                          </g>
                        </svg>
                      </span>

                      <h6 className="mb-0 color-dark">تنظیمات</h6>

                      <span className="color-gray-1">۹:۰۸ صبح</span>

                      <span className="color-gray">شما می‌ توانید این الگو را به دلخواه سفارشی کنید</span>
                    </a>

                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-red">
                        <svg className="red svg-size" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="3"></circle>

                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                      </span>

                      <h6 className="mb-0 color-dark">تنظیمات</h6>

                      <span className="color-gray-1">۹:۰۸ صبح</span>

                      <span className="color-gray">شما می‌توانید این الگو را به دلخواه سفارشی کنید</span>
                    </a>
                  </div>

                  <a href="#" className="container all-btn all-btn-red">همه اعلان‌ ها را بررسی کنید</a>

                  <a href="#" className="container close-btn close-btn-red">
                    <svg className="close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="messages">
                <a href="#messages">
                  <svg className="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>

                      <path strokeLinecap="round" opacity="0.5" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22M8 7h8m-6 3.5h4"></path>
                    </g>
                  </svg>
                </a>

                <div id="messages" className="modal">
                  <div className="container all-notification blue-notification">
                    <div className="fw-bold">پیام‌ ها</div>

                    <div className="fw-medium">شما ۵ اعلان جدید دارید</div>
                  </div>

                  <div className="container white-notification">
                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-blue">
                        <Image src="/user-1.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                      </span>

                      <h6 className="mb-0 color-dark">فاطمه اکبری</h6>

                      <span className="color-gray-1">۹:۳۰ صبح</span>

                      <span className="color-gray">فقط به مدیر جدید من نگاه کن</span>
                    </a>

                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-blue">
                        <Image src="/user-2.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                      </span>

                      <h6 className="mb-0 color-dark">سینا احمدی</h6>

                      <span className="color-gray-1">۹:۱۰ صبح</span>

                      <span className="color-gray">فقط برای یاداوری که شما برنامه دارید</span>
                    </a>

                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-blue">
                        <Image src="/user-3.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                      </span>

                      <h6 className="mb-0 color-dark">محمد صابری</h6>

                      <span className="color-gray-1">۹:۰۸ صبح</span>

                      <span className="color-gray">شما می‌توانید این الگو را به دلخواه سفارشی کنید</span>
                    </a>

                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-blue">
                        <Image src="/user-4.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                      </span>

                      <h6 className="mb-0 color-dark">علی درخشانی</h6>

                      <span className="color-gray-1">۹:۳۰ صبح</span>

                      <span className="color-gray">فقط مدیر جدید من را ببین</span>
                    </a>

                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-blue">
                        <Image src="/user-5.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                      </span>

                      <h6 className="mb-0 color-dark">سارا حسینی</h6>

                      <span className="color-gray-1">۹:۱۰ صبح</span>

                      <span className="color-gray">فقط برای یاداوری که شما برنامه دارید</span>
                    </a>

                    <a href="#" className="notification-item">
                      <span className="back-svg back-svg-blue">
                        <Image src="/user-6.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                      </span>

                      <h6 className="mb-0 color-dark">صدرا همتی</h6>

                      <span className="color-gray-1">۹:۰۸ صبح</span>

                      <span className="color-gray">شما می‌توانید این الگو را به دلخواه سفارشی کنید</span>
                    </a>
                  </div>

                  <a href="#" className="container all-btn all-btn-blue">همه پیام‌ ها را بررسی کنید</a>

                  <a href="#" className="container close-btn close-btn-blue">
                    <svg className="close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="messages">
                <a href="#link">
                  <svg className="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z" opacity="0.5"></path>

                      <path d="M21.5 6.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z"></path>
                    </g>
                  </svg>
                </a>

                <div id="link" className="modal">
                  <div className="container all-notification gray-notification">
                    <div className="fw-bold">لینک‌ های سریع</div>

                    <div className="fw-medium">شما ۳ اپشن جدید دارید</div>
                  </div>

                  <div className="container white-notification-1">
                    <div className="d-flex">
                      <a href="#" className="notification-item-1">
                        <span className="back-svg">
                          <Image src="/chat.svg" width="30" height="30" layout="responsive" className="user-img" alt="user"></Image>
                        </span>

                        <h6 className="mb-0 color-dark-1">برنامه چت</h6>

                        <span className="color-gray-2">پیام‌ های جدید رسیدند</span>
                      </a>

                      <a href="#" className="notification-item-1">
                        <span className="back-svg">
                          <Image src="/cart.svg" width="30" height="30" layout="responsive" className="user-img" alt="user"></Image>
                        </span>

                        <h6 className="mb-0 color-dark-1">پروفایل کاربر</h6>

                        <span className="color-gray-2">کسب اطلاعات بیشتر</span>
                      </a>
                    </div>

                    <div className="d-flex">
                      <a href="#" className="notification-item-1">
                        <span className="back-svg">
                          <Image src="/invoice.svg" width="30" height="30" layout="responsive" className="user-img" alt="user"></Image>
                        </span>

                        <h6 className="mb-0 color-dark-1">برنامه فاکتور</h6>

                        <span className="color-gray-2">دریافت اخرین فاکتور</span>
                      </a>

                      <a href="#" className="notification-item-1">
                        <span className="back-svg">
                          <Image src="/date.svg" width="30" height="30" layout="responsive" className="user-img" alt="user"></Image>
                        </span>

                        <h6 className="mb-0 color-dark-1">برنامه تقویم</h6>

                        <span className="color-gray-2">دریافت زمان‌ و تاریخ</span>
                      </a>
                    </div>

                    <div className="d-flex">
                      <a href="#" className="notification-item-1">
                        <span className="back-svg">
                          <Image src="/mobile.svg" width="30" height="30" layout="responsive" className="user-img" alt="user"></Image>
                        </span>

                        <h6 className="mb-0 color-dark-1">برنامه تماس</h6>

                        <span className="color-gray-2">۲ مخاطب ذخیره‌ نشده</span>
                      </a>

                      <a href="#" className="notification-item-1">
                        <span className="back-svg">
                          <Image src="/lifebuoy.svg" width="30" height="30" layout="responsive" className="user-img" alt="user"></Image>
                        </span>

                        <h6 className="mb-0 color-dark-1">لیست مخاطبین</h6>

                        <span className="color-gray-2">افزودن مخاطب جدید</span>
                      </a>
                    </div>

                    <div className="d-flex">
                      <a href="#" className="notification-item-1">
                        <span className="back-svg">
                          <Image src="/email.svg" width="30" height="30" layout="responsive" className="user-img" alt="user"></Image>
                        </span>

                        <h6 className="mb-0 color-dark-1">برنامه ایمیل</h6>

                        <span className="color-gray-2">دریافت ایمیل‌ های جدید</span>
                      </a>

                      <a href="#" className="notification-item-1">
                        <span className="back-svg">
                          <Image src="/application.svg" width="30" height="30" layout="responsive" className="user-img" alt="user"></Image>
                        </span>

                        <h6 className="mb-0 color-dark-1">برنامه یادداشت‌</h6>

                        <span className="color-gray-2">لیست کار ها و وظایف روزانه</span>
                      </a>
                    </div>
                  </div>

                  <a href="#" className="container all-btn all-btn-gray">مشاهده سوالات متداول</a>

                  <a href="#" className="container close-btn close-btn-gray">
                    <svg className="close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="d-flex">
              <div className="d-flex search-icon">
                <div className="d-flex search-icon">
                  <button className="btn p-0 search-icon" onClick={() => setShow(true)}>
                    <svg className="search-svg" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="11.5" cy="11.5" r="9.5"></circle>

                        <path strokeLinecap="round" d="M18.5 18.5L22 22"></path>
                      </g>
                    </svg>
                  </button>

                  {show && (
                    <div className="modal d-block" tabIndex="-1">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <input type="text" className="form-control shadow-none" placeholder="جستجو کنید" />

                            <button type="button" className="btn-close me-auto ms-0 close-icon" onClick={() => setShow(false)}></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="language">
                <div className="dropdown">
                  <button className="select-language p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image src={selectedLang.flag} width="30" height="30" className="flag-lang" alt={selectedLang.name} />
                  </button>

                  <ul className="dropdown-menu">
                    {languages.map((lang, index) => (
                      <li key={index} className="text-center" onClick={() => setSelectedLang(lang)}>
                        <a className="dropdown-item">
                          <Image src={lang.flag} width="30" height="30" className="flag-lang flag-margin" alt={lang.name} />
                          {lang.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="messages">
                <a href="#user">
                  <Image src="/user.jpg" width="30" height="30" layout="responsive" className="user-img" alt="user"></Image>
                </a>

                <div id="user" className="modal">
                  <div className="container user-notification">
                    <Image src="/user.jpg" width="30" height="30" layout="responsive" className="user-img-2" alt="user"></Image>

                    <div className="user-detail">
                      <h5 className="user-h5">سینا احمدی</h5>

                      <p className="user-email">sina247re@gmail.com</p>
                    </div>
                  </div>

                  <div className="container user-notification-1">
                    <a href="#" className="notification-item-2">پروفایل من</a>

                    <a href="#" className="notification-item-2">پروژه‌ های من</a>

                    <a href="#" className="notification-item-2">صندوق ورودی</a>

                    <a href="#" className="notification-item-2">تنظیمات حساب</a>

                    <a href="#" className="notification-item-2">خروج از حساب</a>
                  </div>

                  <a href="#" className="container user-close-btn close-btn-yellow">
                    <svg className="close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main */}

        <section className="row main">
          <div className="col-xl-6 col-lg-12 mt-3">
            <div className="dash-back">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="position-relative h-100 p-3 pt-0">
                    <div className="pt-4 h-100">
                      <h3 className="dash-h3">به‌روزرسانی ما را امتحان کنید و از نسخه ارتقا یافته لذت ببرید</h3>

                      <h2 className="dash-h2">تست رایگان پلن پیشرفته</h2>

                      <p className="dash-p">این یک متن تست برای پلن پیشرفته است</p>

                      <a href="#" className="add-task">به‌روزرسانی</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-12 mt-3">
            <div className="row">
              <div className="col-md-6">
                <div className="col-md-6 dash-white">
                  <div className="mb-4 p-3">
                    <div className="d-flex justify-content-between">
                      <h4 className="dash-h4">گردش مالی</h4>

                      <div>
                        <svg className="dash-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m8.5-3a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-4.72 4.72a.75.75 0 0 1-1.06-1.06l4.72-4.72H10.5A.75.75 0 0 1 9.75 9"></path>
                        </svg>

                        <span className="dash-number">۲۴٪</span>
                      </div>
                    </div>

                    <div className="persent">
                      <div className="persent-down">۳۴.</div>

                      <div className="persent-up">۴۲۸۳</div>
                    </div>

                    <div className="d-flex justify-content-between align-items-baseline mt-4">
                      <div className="bar bar-1"></div>
                      <div className="bar bar-2"></div>
                      <div className="bar bar-3"></div>
                      <div className="bar bar-4"></div>
                      <div className="bar bar-5"></div>
                      <div className="bar bar-6"></div>
                      <div className="bar bar-7"></div>
                      <div className="bar bar-8"></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 dash-white">
                  <div className="mb-4 p-3">
                    <div className="d-flex justify-content-between">
                      <h4 className="dash-h4">اخرین انتقال</h4>
                    </div>

                    <div className="persent">
                      <div className="persent-down">۸۰.</div>

                      <div className="persent-up">۳۲۰</div>
                    </div>

                    <div className="mt-4">
                      <div className="recent-user">کاربران اخیر</div>

                      <div className="d-flex justify-content-between align-items-center pb-1">
                        <div className="d-flex align-items-center">
                          <a href="#" className="rounded-circle">
                            <Image src="/user-1.jpg" width="30" height="30" layout="responsive" className="rounded-circle user-img-1" alt="user"></Image>

                          </a>

                          <a href="#" className="rounded-circle ms-n2 border border-2">
                            <Image src="/user-2.jpg" width="30" height="30" layout="responsive" className="rounded-circle user-img-1" alt="user"></Image>

                          </a>

                          <a href="#" className="rounded-circle ms-n2 border border-2">
                            <Image src="/user-3.jpg" width="30" height="30" layout="responsive" className="rounded-circle user-img-1" alt="user"></Image>

                          </a>

                          <a href="#" className="rounded-circle ms-n2 border border-2">
                            <Image src="/user-4.jpg" width="30" height="30" layout="responsive" className="rounded-circle user-img-1" alt="user"></Image>

                          </a>
                        </div>

                        <a href="#" className="add-user">
                          <Image src="/add.svg" width="30" height="30" layout="responsive" className="add-user-img" alt="user"></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="col-md-6 dash-white margin-40 bg-transparent">
                  <div className="p-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="sub-h4">اشتراک‌ های فعال</h4>

                      <a href="#" className="manage-a">مدیریت کردن</a>
                    </div>

                    <div className="mt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <a href="#" className="social-a discord">
                            <svg className="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <path fill="currentColor" d="M247.51 174.39L218 58a16.08 16.08 0 0 0-13-11.88l-36.06-5.92a16.22 16.22 0 0 0-18.26 11.88l-.21.85a4 4 0 0 0 3.27 4.93a155.6 155.6 0 0 1 24.41 5.62a8.2 8.2 0 0 1 5.62 9.7a8 8 0 0 1-10.19 5.64a155.4 155.4 0 0 0-90.8-.1a8.22 8.22 0 0 1-10.28-4.81a8 8 0 0 1 5.08-10.33a157 157 0 0 1 24.72-5.72a4 4 0 0 0 3.27-4.93l-.21-.85a16.21 16.21 0 0 0-18.28-11.87L51 46.13A16.08 16.08 0 0 0 38 58L8.49 174.39a15.94 15.94 0 0 0 9.06 18.51l67 29.71a16.17 16.17 0 0 0 21.71-9.1l3.49-9.45a4 4 0 0 0-3.27-5.35a158 158 0 0 1-28.63-6.2a8.2 8.2 0 0 1-5.61-9.67a8 8 0 0 1 10.2-5.66a155.6 155.6 0 0 0 91.12 0a8 8 0 0 1 10.19 5.65a8.19 8.19 0 0 1-5.61 9.68a158 158 0 0 1-28.62 6.2a4 4 0 0 0-3.27 5.35l3.49 9.45a16.18 16.18 0 0 0 21.71 9.1l67-29.71a15.94 15.94 0 0 0 9.06-18.51M92 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></path>
                            </svg>
                          </a>

                          <a href="#" className="social-a ms-n2 telegram">
                            <svg className="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <path fill="currentColor" d="M231.4 44.34v.15l-58.2 191.94a15.88 15.88 0 0 1-14 11.51q-.69.06-1.38.06a15.86 15.86 0 0 1-14.42-9.15l-36.4-74.7a4 4 0 0 1 .77-4.58l57.92-57.92a8 8 0 0 0-11.31-11.31l-57.95 57.92a4 4 0 0 1-4.58.77l-74.77-36.39a16 16 0 0 1 2.49-29.8l191.94-58.2h.15a16 16 0 0 1 19.74 19.7"></path>
                            </svg>
                          </a>

                          <a href="#" className="social-a ms-n2 apple">
                            <svg className="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <path fill="currentColor" d="M128.23 30A40 40 0 0 1 167 0h1a8 8 0 0 1 0 16h-1a24 24 0 0 0-23.24 18a8 8 0 1 1-15.5-4Zm95.07 139.59a8.07 8.07 0 0 0-2.8-3.4C203.53 154.53 200 134.64 200 120c0-17.67 13.47-33.06 21.5-40.67a8 8 0 0 0 0-11.62C208.82 55.74 187.82 48 168 48a72.23 72.23 0 0 0-40 12.13a71.56 71.56 0 0 0-90.71 9.09A74.63 74.63 0 0 0 16 123.4a127 127 0 0 0 40.14 89.73A39.8 39.8 0 0 0 83.59 224h87.68a39.84 39.84 0 0 0 29.12-12.57a125 125 0 0 0 17.82-24.6c7.02-12.83 6.12-14.83 5.09-17.24"></path>
                            </svg>
                          </a>

                          <a href="#" className="social-a ms-n2 drible">
                            <svg className="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <path fill="currentColor" d="M93.27 36.86a4 4 0 0 1 .82-7.19a103.94 103.94 0 0 1 88.66 9.95a4 4 0 0 1 1 5.87a153.3 153.3 0 0 1-41.89 37a169.4 169.4 0 0 0-48.59-45.63M127.58 90a153 153 0 0 0-56-46.91a3.94 3.94 0 0 0-4 .33a104.4 104.4 0 0 0-38.34 52a4 4 0 0 0 3 5.16A152.3 152.3 0 0 0 64 104a151 151 0 0 0 63.58-14m103.8 26.69a103.8 103.8 0 0 0-29.19-61.49a4 4 0 0 0-6 .34a169.2 169.2 0 0 1-45.69 40.4a167.7 167.7 0 0 1 13.55 29.9A167.6 167.6 0 0 1 208 120a169 169 0 0 1 19 1.07a4 4 0 0 0 4.38-4.35Zm-62.91 24.5a167.7 167.7 0 0 1 4.45 38.47a168 168 0 0 1-4.11 36.85a4 4 0 0 0 5.69 4.49a104.25 104.25 0 0 0 56.57-79.25a4 4 0 0 0-3.49-4.49a152.4 152.4 0 0 0-59.11 4Zm-19.64-10.45a152 152 0 0 0-12.39-27.21A167 167 0 0 1 64 120a168.4 168.4 0 0 1-34.88-3.65a4 4 0 0 0-4.81 3.56q-.31 4-.32 8.09a103.72 103.72 0 0 0 33 75.91a4 4 0 0 0 6.15-.92a169 169 0 0 1 85.69-72.22Zm-73.14 82.51a4 4 0 0 0 1.52 5.48a103.88 103.88 0 0 0 68.85 11.69a3.93 3.93 0 0 0 3.06-2.65a152.6 152.6 0 0 0 7.8-48.08a151.3 151.3 0 0 0-3.74-33.46a152.94 152.94 0 0 0-77.49 67.02"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 dash-gray">
                  <div className="card mb-3 border-light">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="box-doc whatsapp-bg">
                            <svg className="icon-svg whatsapp-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <path fill="currentColor" d="m152.58 145.23l23 11.48A24 24 0 0 1 152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155ZM232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-40 24a8 8 0 0 0-4.42-7.16l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40"></path>
                            </svg>
                          </div>

                          <div>
                            <h6 className="mb-0">واتساپ</h6>
                          </div>
                        </div>

                        <div>
                          <h6 className="h6-price">۲,۳۹۹,۰۰۰</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-3 border-light">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="box-doc apple-bg">
                            <svg className="icon-svg apple-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <path fill="currentColor" d="M128.23 30A40 40 0 0 1 167 0h1a8 8 0 0 1 0 16h-1a24 24 0 0 0-23.24 18a8 8 0 1 1-15.5-4Zm95.07 139.59a8.07 8.07 0 0 0-2.8-3.4C203.53 154.53 200 134.64 200 120c0-17.67 13.47-33.06 21.5-40.67a8 8 0 0 0 0-11.62C208.82 55.74 187.82 48 168 48a72.23 72.23 0 0 0-40 12.13a71.56 71.56 0 0 0-90.71 9.09A74.63 74.63 0 0 0 16 123.4a127 127 0 0 0 40.14 89.73A39.8 39.8 0 0 0 83.59 224h87.68a39.84 39.84 0 0 0 29.12-12.57a125 125 0 0 0 17.82-24.6c7.02-12.83 6.12-14.83 5.09-17.24"></path>
                            </svg>
                          </div>

                          <div>
                            <h6 className="mb-0">اپل استور</h6>
                          </div>
                        </div>

                        <div>
                          <h6 className="h6-price">۱,۲۸۸,۰۰۰</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-3 border-light">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="box-doc netflix-bg">
                            <svg className="icon-svg netflix-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path fill="currentColor" d="m11.292 3.814l2.018 5.707l.396 1.116l.007-4.81l.01-4.818h4.27L18 11.871c.003 5.98-.003 10.89-.015 10.9s-.209 0-.436-.027a49 49 0 0 0-3.34-.282a15 15 0 0 1-.636-.038c-.003-.003-.273-.762-.776-2.184v-.004l-2.144-6.061l-.34-.954l-.008 4.586c-.006 4.365-.01 4.61-.057 4.61c-.163 0-1.57.09-2.04.136c-.308.027-.926.09-1.37.145c-.446.051-.816.085-.823.078S6 17.867 6 11.883V1.002h.005V1h4.288l.028.08c.007.016.065.176.157.437l.641 1.778l.173.496z"></path>
                            </svg>
                          </div>

                          <div>
                            <h6 className="mb-0">نتفلیکس</h6>
                          </div>
                        </div>

                        <div>
                          <h6 className="h6-price">۵۸۰,۰۰۰</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card border-light">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="box-doc telegram-bg">
                            <svg className="icon-svg telegram-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <path fill="currentColor" d="M228.88 26.19a9 9 0 0 0-9.16-1.57L17.06 103.93a14.22 14.22 0 0 0 2.43 27.21L72 141.45V200a15.92 15.92 0 0 0 10 14.83a15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L165 220a15.88 15.88 0 0 0 10.51 4a16.3 16.3 0 0 0 5-.79a15.85 15.85 0 0 0 10.67-11.63L231.77 35a9 9 0 0 0-2.89-8.81M175.53 208l-82.68-72.5l119-85.29Z"></path>
                            </svg>
                          </div>

                          <div>
                            <h6 className="mb-0">تلگرام</h6>
                          </div>
                        </div>

                        <div>
                          <h6 className="h6-price">۴۵۰,۰۰۰</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-3">
            <div className="main-list-up">
              <div>
                <h4 className="to-do-list">لیست انجام کار ها</h4>

                <p className="work-in-month">کار های این ماه</p>
              </div>

              <div className="messages-red">
                <a href="#red" className="add-task">افزودن کار</a>

                <div id="red" className="modal">
                  <div className="container user-notification-2">
                    <div className="mb-3">
                      <label className="main-label">نام دسته وظیفه</label>

                      <input className="main-input" placeholder="نام دسته کار خود را وارد کنید"></input>
                    </div>

                    <div className=" mb-3">
                      <label className="main-label">اسم وظیفه</label>

                      <input className="main-input" placeholder="اسم کار خود را وارد کنید"></input>
                    </div>
                  </div>

                  <a href="#" className="container user-save save-green">اضافه کردن وظیفه</a>

                  <a href="#" className="container user-close-btn close-btn-red">
                    <svg className="close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="main-list-down">
              <ul>
                <li className="main-all-pad">
                  <div className="main-check-box-1">
                    <input className="main-input-check-box main-input-check-box-blue" type="checkbox"></input>

                    <label className="main-label-check-box">برنامه‌ ریزی ملاقات با</label>
                  </div>

                  <ul className="main-ul-img">
                    <li>
                      <Image src="/user-4.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                    </li>

                    <li>
                      <Image src="/user-3.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                    </li>

                    <li>
                      <Image src="/user-2.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                    </li>

                    <li>
                      <Image src="/user-1.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                    </li>
                  </ul>
                </li>

                <li className="main-all-pad">
                  <div className="main-check-box-2">
                    <input className="main-input-check-box main-input-check-box-red" type="checkbox"></input>

                    <label className="main-label-check-box">
                      ارسال گزارش خرید به
                      <span className="today-box">امروز</span>
                    </label>
                  </div>

                  <ul className="main-ul-img">
                    <li>
                      <Image src="/user-4.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                    </li>

                    <li>
                      <Image src="/user-3.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                    </li>
                  </ul>
                </li>

                <li className="main-all-pad">
                  <div className="main-check-box-3">
                    <input className="main-input-check-box main-input-check-box-green" type="checkbox"></input>

                    <label className="main-label-check-box">رزرو پرواز برای تعطیلات</label>
                  </div>

                  <div className="data-box">۵ تیر ۱۴۰۴</div>
                </li>

                <li className="main-all-pad">
                  <div className="main-check-box-4">
                    <input className="main-input-check-box main-input-check-box-yellow" type="checkbox"></input>

                    <label className="main-label-check-box">
                      ارسال همه وظایف
                      <span className="week-box">۲ هفته</span>
                    </label>
                  </div>

                  <div className="data-box">۲۶ تیر ۱۴۰۴</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8 mt-3 pad-20">
            <div className="d-flex">
              <h4 className="h4-year">فروش سالانه محصولات</h4>

              <ul className="ul-mac">
                <li className="li-mac mac-red">
                  <svg className="li-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="#f33e5a" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                  </svg>
                  مک
                </li>

                <li className="li-mac mac-blue">
                  <svg className="li-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="#1781fd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                  </svg>
                  ویندوز
                </li>
              </ul>
            </div>

            <div>
              <canvas ref={chartRef} className="w-100 mt-3"></canvas>
            </div>
          </div>

          <div className="col-12 mt-3 back-light">
            <h4 className="idea">دیدگاه‌ ها</h4>

            <div className="comment-card">
              <div>
                <Image src="/user-2.jpg" width="30" height="30" layout="responsive" className="idea-img" alt="user"></Image>
              </div>

              <div className="comment-content">
                <div className="name">
                  حسین نعمتی
                  <span className="time">۵ دقیقه پیش</span>
                  <span className="idea-box ok">تایید شده</span>
                </div>

                <div className="text">این یک متن تستی است که برای نمایش نحوه‌ نمایش کامنت‌ ها استفاده می‌شود</div>
              </div>
            </div>

            <div className="comment-card">
              <div>
                <Image src="/user-4.jpg" width="30" height="30" layout="responsive" className="idea-img" alt="user"></Image>
              </div>

              <div className="comment-content">
                <div className="name">
                  علی محمدی
                  <span className="time">۵ دقیقه پیش</span>
                  <span className="idea-box false">رد شده</span>
                </div>

                <div className="text">این یک متن تستی است که برای نمایش نحوه‌ نمایش کامنت‌ ها استفاده می‌شود</div>
              </div>
            </div>

            <div className="comment-card">
              <div>
                <Image src="/user-6.jpg" width="30" height="30" layout="responsive" className="idea-img" alt="user"></Image>
              </div>

              <div className="comment-content">
                <div className="name">
                  سینا احمدی
                  <span className="time">۵ دقیقه پیش</span>
                  <span className="idea-box pend">نهایی نشده</span>
                </div>

                <div className="text">این یک متن تستی است که برای نمایش نحوه‌ نمایش کامنت‌ ها استفاده می‌شود</div>
              </div>
            </div>

            <div className="comment-card">
              <div>
                <Image src="/user-7.jpg" width="30" height="30" layout="responsive" className="idea-img" alt="user"></Image>
              </div>

              <div className="comment-content">
                <div className="name">
                  محمد همتی
                  <span className="time">۵ دقیقه پیش</span>
                  <span className="idea-box ok">تایید شده</span>
                </div>

                <div className="text">این یک متن تستی است که برای نمایش نحوه‌ نمایش کامنت‌ ها استفاده می‌شود</div>
              </div>
            </div>
          </div>

          <div className="col-12 mt-3 mb-3 p-0 back-light">
            <div className="top-doc">
              <h4>فروش‌ های انجام شده</h4>

              <div>
                <select className="select-color">
                  <option>فروردین</option>

                  <option>اردیبهشت</option>

                  <option>خرداد</option>

                  <option>تیر</option>

                  <option>مرداد</option>
                </select>
              </div>
            </div>

            <div className="top-doc doc-color">
              <div>
                <h2 className="dark-h2">فروردین ۱۴۰۳</h2>
                <p className="gray-p">گزارش فروش</p>
              </div>

              <div>
                <h3 className="blue-h3">۳۶۹,۰۰۰,۰۰۰</h3>
              </div>
            </div>

            <div className="tax-box">
              <table className="table-box">
                <thead>
                  <tr>
                    <th className="th-box">ستون</th>
                    <th className="th-box">نام</th>
                    <th className="th-box">وضعیت</th>
                    <th className="th-box">تاریخ</th>
                    <th className="th-box">قیمت</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="tr-box">
                    <td className="td-box">۱</td>
                    <td className="td-box">سینا احمدی</td>
                    <td className="td-box">
                      <span className="status sale">فروش</span>
                    </td>
                    <td className="td-box">۳۰ فروردین</td>
                    <td className="td-box price cost-blue">۲,۴۰۰,۰۰۰</td>
                  </tr>

                  <tr className="tr-box">
                    <td className="td-box">۲</td>
                    <td className="td-box">محمد همتی</td>
                    <td className="td-box">
                      <span className="status extended">تمدید شده</span>
                    </td>
                    <td className="td-box">۳ اردیبهشت</td>
                    <td className="td-box price cost-blue">۱۲۵,۰۰۰,۰۰۰</td>
                  </tr>

                  <tr className="tr-box">
                    <td className="td-box">۳</td>
                    <td className="td-box">حسین محمدی</td>
                    <td className="td-box">
                      <span className="status approved">فروش</span>
                    </td>
                    <td className="td-box">۱۳ شهریور</td>
                    <td className="td-box price cost-green">۱۲۵,۰۰۰,۰۰۰</td>
                  </tr>

                  <tr className="tr-box">
                    <td className="td-box">۴</td>
                    <td className="td-box">سارا محسنی</td>
                    <td className="td-box">
                      <span className="status tax">مالیات</span>
                    </td>
                    <td className="td-box">۱۷ خرداد</td>
                    <td className="td-box price cost-red">۲,۴۰۰,۰۰۰-</td>
                  </tr>

                  <tr className="tr-box">
                    <td className="td-box">۵</td>
                    <td className="td-box">مهسا رضایی</td>
                    <td className="td-box">
                      <span className="status member">عضویت</span>
                    </td>
                    <td className="td-box">۲۵ مهر</td>
                    <td className="td-box price cost-green">۲,۴۰۰,۰۰۰</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
            <Image src="/1.jpg" width="30" height="30" layout="responsive" className="blog-img-1" alt="user"></Image>

            <div className="blog-box">
              <div className="main-div">
                <span className="love-box">
                  <Image src="/calendar.svg" width="30" height="30" layout="responsive" className="blog-img-2" alt="user"></Image>
                  ۲۷ اردیبهشت
                </span>

                <div className="margin-right-auto">
                  <a href="#" className="love-box">
                    <Image src="/love.svg" width="30" height="30" layout="responsive" className="blog-img-2" alt="user"></Image>
                    ۳۰
                  </a>
                </div>
              </div>

              <h4 className="main-h4">مدل های برتر اینجا هستند</h4>

              <p className="main-p">این یک متن تست است</p>

              <a href="#" className="main-a">بیشتر بخوانید</a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
            <Image src="/2.jpg" width="30" height="30" layout="responsive" className="blog-img-1" alt="user"></Image>

            <div className="blog-box">
              <div className="main-div">
                <span className="love-box">
                  <Image src="/calendar.svg" width="30" height="30" layout="responsive" className="blog-img-2" alt="user"></Image>
                  ۲۷ اردیبهشت
                </span>

                <div className="margin-right-auto">
                  <a href="#" className="love-box">
                    <Image src="/love.svg" width="30" height="30" layout="responsive" className="blog-img-2" alt="user"></Image>
                    ۳۰
                  </a>
                </div>
              </div>

              <h4 className="main-h4">پخش ویدئو قبل از اینکه مُد شود</h4>

              <p className="main-p">این یک متن تست است</p>

              <a href="#" className="main-a">بیشتر بخوانید</a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
            <Image src="/3.jpg" width="30" height="30" layout="responsive" className="blog-img-1" alt="user"></Image>

            <div className="blog-box">
              <div className="main-div">
                <span className="love-box">
                  <Image src="/calendar.svg" width="30" height="30" layout="responsive" className="blog-img-2" alt="user"></Image>
                  ۲۷ اردیبهشت
                </span>

                <div className="margin-right-auto">
                  <a href="#" className="love-box">
                    <Image src="/love.svg" width="30" height="30" layout="responsive" className="blog-img-2" alt="user"></Image>
                    ۳۰
                  </a>
                </div>
              </div>

              <h4 className="main-h4">گارمین یک مدل ساعت مقاوم است</h4>

              <p className="main-p">این یک متن تست است</p>

              <a href="#" className="main-a">بیشتر بخوانید</a>
            </div>
          </div>

          <div className="col-lg-8 mb-3 menu-inner">
            <div className="row menu-header">
              <div className="col-lg-8 mail-doc">
                <h4 className="h4-doc">صندوق پستی شما</h4>

                <div className="div-doc">۳۵۰ ایمیل خوانده‌ نشده</div>
              </div>
            </div>

            <div className="row menu-main">
              <div className="menu-button-box">
                <button className="menu-button" onClick={() => handleMenuChange("inbox")}>ورودی</button>

                <button className="menu-button" onClick={() => handleMenuChange("sent")}>خروجی</button>

                <button className="menu-button" onClick={() => handleMenuChange("spam")}>هرزنامه</button>

                <button className="menu-button" onClick={() => handleMenuChange("deleted")}>حذف‌</button>
              </div>

              <div className="menu-content">
                {activeMenu === "inbox" && (
                  <table>
                    <tbody>
                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-7.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>سینا احمدی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work-3">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۳ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-2.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>رضا محمدی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="business">بیزینس</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۲ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-3.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                          <span>مهسا رضایی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="freind">دوست</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۰ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-4.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>صدرا اکبری</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work-2">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۱۶ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-3.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>سارا حسینی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۱۲ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-6.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>محمد همتی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="important">مهم</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۳ اردیبهشت</td>
                      </tr>
                    </tbody>
                  </table>
                )}

                {activeMenu === "sent" && (
                  <table>
                    <tbody>
                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-3.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                          <span>مهسا رضایی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="freind">دوست</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۰ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-4.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>صدرا اکبری</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work-2">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۱۶ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-7.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>سینا احمدی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۳ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-6.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>محمد همتی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="important">مهم</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۳ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-3.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>سارا حسینی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work-3">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۱۲ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-2.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>رضا محمدی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="business">بیزینس</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۲ اردیبهشت</td>
                      </tr>
                    </tbody>
                  </table>
                )}

                {activeMenu === "spam" && (
                  <table>
                    <tbody>
                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-3.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                          <span>مهسا رضایی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="freind">دوست</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۰ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-4.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>صدرا اکبری</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work-2">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۱۶ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-7.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>سینا احمدی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۳ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-6.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>محمد همتی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="important">مهم</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۳ اردیبهشت</td>
                      </tr>
                    </tbody>
                  </table>
                )}

                {activeMenu === "deleted" && (
                  <table>
                    <tbody>
                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-7.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>سینا احمدی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۳ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-6.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>محمد همتی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="important">مهم</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۳ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-3.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>
                          <span>مهسا رضایی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="freind">دوست</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۰ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-7.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>سینا احمدی</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work-3">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۲۳ اردیبهشت</td>
                      </tr>

                      <tr>
                        <td className="full-name">
                          <input className="main-input-check-box main-input-check-box-black" type="checkbox"></input>

                          <svg className="star-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                          </svg>

                          <Image src="/user-4.jpg" width="30" height="30" layout="responsive" className="user-img-1" alt="user"></Image>

                          <span>صدرا اکبری</span>
                        </td>

                        <td>
                          <a href="#">
                            <span className="work-2">کار</span>

                            <span className="color-gray-3">این یک متن ساختگی است</span>
                          </a>
                        </td>

                        <td>
                          <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></path>

                            <path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></path>

                            <path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></path>
                          </svg>
                        </td>

                        <td>۱۶ اردیبهشت</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3">
            <div className="main-up">
              <div className="main-up-1">
                <div>
                  <Image src="/user-4.jpg" width="30" height="30" layout="responsive" className="main-img" alt="user"></Image>
                </div>

                <div className="main-margin-right">
                  <h3 className="main-name">سینا احمدی</h3>

                  <h6 className="main-job">طراح رابط و تجربه کاربری</h6>

                  <a href="#" className="main-a-2">دنبال کردن</a>
                </div>
              </div>

              <div className="main-up-2">
                <div className="col h-100 text-center border-left">
                  <h3 className="main-h3">۱۴</h3>

                  <h6 className="main-h6">عکس‌ ها</h6>
                </div>

                <div className="col h-100 text-center border-left">
                  <h3 className="main-h3">۵۴</h3>

                  <h6 className="main-h6">فیلم‌ ها</h6>
                </div>

                <div className="col h-100 text-center">
                  <h3 className="main-h3">۱۴۵</h3>

                  <h6 className="main-h6">کار ها</h6>
                </div>
              </div>
            </div>

            <div className="main-mid">
              <p className="main-mid-p">در اینجا راه های ارتباطی با من هست</p>

              <ul className="main-mid-ul">
                <li>
                  <a href="#">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <path fill="#8d989d" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m83.13 96h-31.57a144.3 144.3 0 0 0-21.35-66.36A84.22 84.22 0 0 1 211.13 116M128 207c-9.36-10.81-24.46-33.13-27.45-67h54.94a119.74 119.74 0 0 1-17.11 52.77A108.6 108.6 0 0 1 128 207m-27.45-91a119.74 119.74 0 0 1 17.11-52.77A108.6 108.6 0 0 1 128 49c9.36 10.81 24.46 33.13 27.45 67Zm-2.76-66.36A144.3 144.3 0 0 0 76.44 116H44.87a84.22 84.22 0 0 1 52.92-66.36M44.87 140h31.57a144.3 144.3 0 0 0 21.35 66.36A84.22 84.22 0 0 1 44.87 140m113.34 66.36A144.3 144.3 0 0 0 179.56 140h31.57a84.22 84.22 0 0 1-52.92 66.36"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <path fill="#8d989d" d="M251.09 67.41A12 12 0 0 0 240 60h-28.18a52.73 52.73 0 0 0-43.67-24a50.85 50.85 0 0 0-36.6 14.85A51.87 51.87 0 0 0 116 88v.78c-36.83-11.57-66.38-40.9-66.7-41.23a12 12 0 0 0-20.47 7.38c-6.31 70.17 24.65 107.79 42.06 123.12C56.4 192.83 36 200.68 35.8 200.76a12 12 0 0 0-5.8 17.9C32 221.55 43.44 236 80 236c72.25 0 132.7-55.26 139.6-126.63l28.88-28.88a12 12 0 0 0 2.61-13.08m-51.57 28.11a11.93 11.93 0 0 0-3.49 7.72C192.14 164.23 141.18 212 80 212a91 91 0 0 1-12.49-.79C78 204.55 89.72 195.07 98 182.66a12 12 0 0 0-3.9-17c-.12-.07-12.33-7.49-23.43-24.42s-17.26-37-18.46-59.78C69.37 94.4 96 110.79 126 115.84A12 12 0 0 0 140 104V88a28 28 0 0 1 8.41-20.07A27.07 27.07 0 0 1 167.86 60a28.83 28.83 0 0 1 25.82 16.81a12 12 0 0 0 11 7.19H211Z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <path fill="#8d989d" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V156h20a12 12 0 0 0 0-24h-20v-20a12 12 0 0 1 12-12h16a12 12 0 0 0 0-24h-16a36 36 0 0 0-36 36v20H96a12 12 0 0 0 0 24h20v55.13a84 84 0 1 1 24 0"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <path fill="#8d989d" d="m170.49 117.91l-56-36A12 12 0 0 0 96 92v72a12 12 0 0 0 18.49 10.09l56-36a12 12 0 0 0 0-20.18M120 142v-28l21.81 14Zm118.21-73.5a28.05 28.05 0 0 0-16.93-19.14C186.4 35.91 131.29 36 128 36s-58.4-.09-93.28 13.38a28.05 28.05 0 0 0-16.93 19.14C15.15 78.72 12 97.32 12 128s3.15 49.28 5.79 59.48a28.05 28.05 0 0 0 16.93 19.14C68.21 219.55 120.36 220 127.37 220h1.26c7 0 59.16-.45 92.65-13.38a28.05 28.05 0 0 0 16.93-19.14c2.64-10.2 5.79-28.8 5.79-59.48s-3.15-49.28-5.79-59.48ZM215 181.46a4 4 0 0 1-2.34 2.77C182.78 195.76 132.27 196 128.32 196h-.39c-.53 0-53.64.17-84.56-11.77a4 4 0 0 1-2.37-2.77c-1.88-7.24-5-23.82-5-53.46s3.15-46.22 5-53.46a4 4 0 0 1 2.34-2.77C74.29 59.83 127.39 60 127.92 60h.15c.54 0 53.64-.17 84.56 11.77a4 4 0 0 1 2.37 2.77c1.88 7.24 5 23.82 5 53.46s-3.15 46.22-5 53.46"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <path fill="#8d989d" d="M216 20H40a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H44V44h168Zm-100-36v-56a12 12 0 0 1 21.43-7.41A40 40 0 0 1 192 148v28a12 12 0 0 1-24 0v-28a16 16 0 0 0-32 0v28a12 12 0 0 1-24 0m-16-56v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0M68 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="main-down">
              <div className="col-12 pb-4 d-flex justify-content-center">
                <h4 className="main-down-h4">دنبال‌ کنندگان</h4>
              </div>

              <div className="d-flex justify-content-center gap-3 pb-2">
                <div>
                  <Image src="/user-7.jpg" width="30" height="30" layout="responsive" className="user-img-2" alt="user"></Image>
                </div>

                <div>
                  <Image src="/user-5.jpg" width="30" height="30" layout="responsive" className="user-img-2" alt="user"></Image>
                </div>

                <div>
                  <Image src="/user-2.jpg" width="30" height="30" layout="responsive" className="user-img-2" alt="user"></Image>
                </div>

                <div>
                  <Image src="/user-1.jpg" width="30" height="30" layout="responsive" className="user-img-2" alt="user"></Image>
                </div>

                <div>
                  <Image src="/user-6.jpg" width="30" height="30" layout="responsive" className="user-img-2" alt="user"></Image>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}

        <section className="container footer">تمامی حقوق برای سینا احمدی محفوظ است</section>
      </body>
    </html >
  );
}
