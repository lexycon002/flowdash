// sidebarItems.js
import { IoIosHome } from "react-icons/io";
import { MdSupport ,MdOutlineDescription , MdFace5 , MdOutlineSportsFootball , MdHelpOutline , MdOutlineWarningAmber ,MdFitbit ,MdOutlineApi, MdToc ,MdViewAgenda , MdOutlineWidgets,MdCardGiftcard, MdOutlineShoppingBag } from "react-icons/md";
// import { TiThSmallOutline,  } from "react-icons/ti";
import { IoAppsSharp, IoIdCardOutline  } from "react-icons/io5";
import { RiArrowRightSFill } from "react-icons/ri";



// src/data/sidebarItems.js
const sidebarItems = [
  {
    title: "Dashboard",
    icon: IoIosHome,
    children: [
      { cIcon: RiArrowRightSFill, title: "Analysis", path: "/dashboard/analysis" },
      { cIcon: RiArrowRightSFill, title: "eCommerce", path: "/dashboard/ecommerce" }
    ]
  },
  {
    title: "Widgets",
    icon: MdOutlineWidgets,
    children: [
      { cIcon: RiArrowRightSFill, title: "Data", path: "/widgets/data" },
      { cIcon: RiArrowRightSFill, title: "Static", path: "/widgets/static" }
    ]
  },
  {
    title: "Apps",
    icon: IoAppsSharp,
    children: [
      { cIcon: RiArrowRightSFill, title: "Email Box", path: "/apps/email-box" },
      { cIcon: RiArrowRightSFill, title: "Email Read", path: "/apps/email-read" },
      { cIcon: RiArrowRightSFill, title: "Chat", path: "/apps/chat" },
      { cIcon: RiArrowRightSFill, title: "Calendar", path: "/apps/calendar" },
      { cIcon: RiArrowRightSFill, title: "To do", path: "/apps/todo" },
      { cIcon: RiArrowRightSFill, title: "Invoice", path: "/apps/invoice" }
    ]
  },
  {
    title: "eCommerce",
    icon: MdOutlineShoppingBag,
    children: [
      { cIcon: RiArrowRightSFill, title: "Add Product", path: "/ecommerce/add-product" },
      { cIcon: RiArrowRightSFill, title: "Products", path: "/ecommerce/products" },
      { cIcon: RiArrowRightSFill, title: "Customers", path: "/ecommerce/customers" },
      { cIcon: RiArrowRightSFill, title: "Customer Details", path: "/ecommerce/customer-details" },
      { cIcon: RiArrowRightSFill, title: "Orders", path: "/ecommerce/orders" },
      { cIcon: RiArrowRightSFill, title: "Order Details", path: "/ecommerce/order-details" }
    ]
  },
  {
    title: "Components",
    icon: MdCardGiftcard,
    children: [
      { cIcon: RiArrowRightSFill, title: "Alerts", path: "/components/alerts" },
      { cIcon: RiArrowRightSFill, title: "Accordions", path: "/components/accordions" },
      { cIcon: RiArrowRightSFill, title: "Badges", path: "/components/badges" },
      { cIcon: RiArrowRightSFill, title: "Buttons", path: "/components/buttons" },
      { cIcon: RiArrowRightSFill, title: "Carousels", path: "/components/carousels" },
      { cIcon: RiArrowRightSFill, title: "Media Objects", path: "/components/media-objects" },
      { cIcon: RiArrowRightSFill, title: "Modals", path: "/components/modals" },
      { cIcon: RiArrowRightSFill, title: "Navs & Tabs", path: "/components/navs-tabs" },
      { cIcon: RiArrowRightSFill, title: "Navbar", path: "/components/navbar" },
      { cIcon: RiArrowRightSFill, title: "Pagination", path: "/components/pagination" },
      { cIcon: RiArrowRightSFill, title: "Popovers & Tooltips", path: "/components/popovers-tooltips" },
      { cIcon: RiArrowRightSFill, title: "Progress", path: "/components/progress" },
      { cIcon: RiArrowRightSFill, title: "Spinners", path: "/components/spinners" },
      { cIcon: RiArrowRightSFill, title: "Notifications", path: "/components/notifications" },
      { cIcon: RiArrowRightSFill, title: "Avatrs & Chips", path: "/components/avatars-chips" },
      { cIcon: RiArrowRightSFill, title: "Typography", path: "/components/typography" },
      { cIcon: RiArrowRightSFill, title: "Utilities", path: "/components/utilities" }
    ]
  },
  {
    title: "Icons",
    icon: MdViewAgenda,
    children: [
      { cIcon: RiArrowRightSFill, title: "Line Icons", path: "/icons/line-icons" },
      { cIcon: RiArrowRightSFill, title: "Boxicons", path: "/icons/boxicons" },
      { cIcon: RiArrowRightSFill, title: "Feather Icons", path: "/icons/feather-icons" }
    ]
  },
  {
    title: "Forms",
    icon: MdToc,
    children: [
      { cIcon: RiArrowRightSFill, title: "Form Elements", path: "/forms/elements" },
      { cIcon: RiArrowRightSFill, title: "Input Groups", path: "/forms/input-groups" },
      { cIcon: RiArrowRightSFill, title: "Radios & Checkboxes", path: "/forms/radios-checkboxes" },
      { cIcon: RiArrowRightSFill, title: "Forms Layouts", path: "/forms/layouts" },
      { cIcon: RiArrowRightSFill, title: "Form Validation", path: "/forms/validation" },
      { cIcon: RiArrowRightSFill, title: "Form Wizard", path: "/forms/wizard" },
      { cIcon: RiArrowRightSFill, title: "File Upload", path: "/forms/file-upload" },
      { cIcon: RiArrowRightSFill, title: "Date Pickers", path: "/forms/date-pickers" },
      { cIcon: RiArrowRightSFill, title: "Select2", path: "/forms/select2" },
      { cIcon: RiArrowRightSFill, title: "Form Repeater", path: "/forms/repeater" }
    ]
  },
  {
    title: "Tables",
    icon: MdOutlineApi,
    children: [
      { cIcon: RiArrowRightSFill, title: "Basic Table", path: "/tables/basic" },
      { cIcon: RiArrowRightSFill, title: "Data Table", path: "/tables/data" }
    ]
  },
  {
    title: "Charts & Maps",
    icon: MdFitbit,
    children: [
      { cIcon: RiArrowRightSFill, title: "Apex Charts", path: "/charts/apex" },
      { cIcon: RiArrowRightSFill, title: "Chartjs", path: "/charts/chartjs" },
      {
        title: "Maps",
        children: [
          { cIcon: RiArrowRightSFill, title: "Google Maps", path: "/maps/google" },
          { cIcon: RiArrowRightSFill, title: "Vector Maps", path: "/maps/vector" }
        ]
      }
    ]
  },
  {
    title: "Pages",
    icon: MdOutlineWarningAmber,
    children: [
      {
        title: "Authentication",
        children: [
          { cIcon: RiArrowRightSFill, title: "Login", path: "/pages/auth/login" },
          { cIcon: RiArrowRightSFill, title: "Register", path: "/pages/auth/register" },
          { cIcon: RiArrowRightSFill, title: "Forgot Password", path: "/pages/auth/forgot-password" },
          { cIcon: RiArrowRightSFill, title: "Reset Password", path: "/pages/auth/reset-password" }
        ]
      },
      {
        title: "Cover Authentication",
        children: [
          { cIcon: RiArrowRightSFill, title: "Login", path: "/pages/auth/cover-login" },
          { cIcon: RiArrowRightSFill, title: "Register", path: "/pages/auth/cover-register" },
          { cIcon: RiArrowRightSFill, title: "Forgot Password", path: "/pages/auth/cover-forgot" },
          { cIcon: RiArrowRightSFill, title: "Reset Password", path: "/pages/auth/cover-reset" }
        ]
      },
      {
        title: "Boxed Authentication",
        children: [
          { cIcon: RiArrowRightSFill, title: "Login", path: "/pages/auth/boxed-login" },
          { cIcon: RiArrowRightSFill, title: "Register", path: "/pages/auth/boxed-register" },
          { cIcon: RiArrowRightSFill, title: "Forgot Password", path: "/pages/auth/boxed-forgot" },
          { cIcon: RiArrowRightSFill, title: "Reset Password", path: "/pages/auth/boxed-reset" }
        ]
      },
      { cIcon: RiArrowRightSFill, title: "User Profile", path: "/pages/profile" },
      { cIcon: RiArrowRightSFill, title: "Timeline", path: "/pages/timeline" },
      {
        title: "Error Pages",
        children: [
          { cIcon: RiArrowRightSFill, title: "404 Error", path: "/pages/error/404" },
          { cIcon: RiArrowRightSFill, title: "505 Error", path: "/pages/error/505" },
          { cIcon: RiArrowRightSFill, title: "Coming Soon", path: "/pages/error/coming-soon" },
          { cIcon: RiArrowRightSFill, title: "Blank Page", path: "/pages/error/blank" }
        ]
      },
      { cIcon: RiArrowRightSFill, title: "FAQ", icon: MdHelpOutline, path: "/pages/faq" },
      { cIcon: RiArrowRightSFill, title: "Pricing", icon: MdOutlineSportsFootball, path: "/pages/pricing" }
    ]
  },
  {
    title: "Others",
    icon: MdFace5,
    children: [
      {
        title: "Menu Levels",
        children: [
          {
            title: "Level One",
            children: [
              {
                title: "Level Two",
                children: [
                  { cIcon: RiArrowRightSFill, title: "Level Three", path: "/others/level-three" }
                ]
              }
            ]
          }
        ]
      },
      { cIcon: RiArrowRightSFill, title: "Documentation", icon: MdOutlineDescription, path: "/documentation" },
      { cIcon: RiArrowRightSFill, title: "Support", icon: MdSupport, path: "/support" }
    ]
  }
];

export default sidebarItems;
