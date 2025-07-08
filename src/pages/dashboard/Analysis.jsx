import CustomSemiCircle from './CustomSemiCircle'
import CustomZigZag from './CustomZigZag';
import { FiChevronUp } from "react-icons/fi";
import { MdCampaign, MdEmail,MdMarkEmailRead,MdOutlineMarkEmailUnread,MdSubscriptions,MdReportGmailerrorred,MdVisibility } from "react-icons/md";
import { BsThreeDotsVertical, BsArrowDownShort  } from "react-icons/bs";
import { IoDesktop } from "react-icons/io5";
import { IoIosTabletPortrait, IoMdTrendingUp  } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import "./analysis.css";
import img from "../../assets/myImage.png";
import vectorImg from "../../assets/vector.png";
import MonthlyRevenueChart from './MonthlyRevenueChart';
import DeviceType from './DeviceType';
import TotalClicksChart from './TotalClicksChart';
import TotalViewsChart from './TotalViewsChart';
import TotalAccountsChart from './TotalAccountschart';
import VisitorsGrowthChart from './VisitorsGrowthChart';
import SocialLeads from './SocialLeads';

function Analysis() {

  const Stat = [
    { icon: <MdCampaign size={20} color="#ff00cc" />,label: "Campaigns",count: 62,change: 28,},
    {icon: <MdEmail size={20} color="#00c9ff" />,label: "Emailed",count: 748,change: -15,
  },
  {icon: <MdMarkEmailRead size={20} color="#00ffaa" />,label: "Opened",count: 83,change: 30.5,},
  {icon: <MdOutlineMarkEmailUnread size={20} color="#ffaa00" />,label: "Clicked",count: 321,change: -34.6,},
  {icon: <MdSubscriptions size={20} color="#ffcc00" />,label: "Subscribed",count: 658,change: 53,},
  {icon: <MdReportGmailerrorred size={20} color="#ff4444" />,label: "Spam Message",count: 129,change: -47,},
  {icon: <MdVisibility size={20} color="#9966ff" />,label: "Views Mails",count: 10205,change: 68,},
  ]
  return (
    <>
    <div className="analysis-container">
      <div className="analysis-info-wrapper">
        <div className="analysis-info-cont">
            <div className="analysis-info-img">
              <img src={img} alt="info-image" />
            </div>
            <div className="analysis-info-text">
                <p>Welcome back</p>
                <p>Hammad Awowole!</p>
            </div>
        </div>
        <div className="analysis-sales-info-cont">
          <div className="sales-amt-cont">
            <h4>$65.4K</h4>
            <p>today's sales</p>
            <div className="progress-bar">
              <div className="progress-fill red">
              </div>
            </div>
          </div>
          <div className="sales-border"></div>
          <div className="sales-rate-cont">
            <h4>78.4%</h4>
            <p>Growth Rate</p>
            <div className="progress-bar">
              <div className="progress-fill">
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="analysis-img">
          <img src={vectorImg} alt="vector-image" />
        </div>
    </div>
      <div className="analysis-grid-container">
          <div className="analysis-dash analysis-active-user-cont">
            <div className="analysis-active-user-wrap">
                <div className="active-user">
                  <h4>42.5K</h4>
                  <p>Active User</p>
                </div>
                <div className="active-user-icon">
                  <BsThreeDotsVertical/>
                </div>
            </div>
            <div className="active-user-chart">
            {/* Chart.js-based semi-circle for Active User */}
            <CustomSemiCircle percent={78} colorStart="#fcd000" colorEnd="#ff007f" />
            <p className='_active-user-text'>24K users from last month</p>
          </div>
          </div>
          <div className="analysis-dash analysis-active-user-cont">
            <div className="analysis-active-user-wrap">
                <div className="active-user">
                  <h4>97.4K</h4>
                  <p>total user</p>
                </div>
                <div className="active-user-icon">
                  <BsThreeDotsVertical/>
                </div>
            </div>
            <div className="active-user-chart">
                <CustomZigZag/>
            <p>12.5% from last month</p>
            </div>
          </div>
          <div className="analysis-dash analysis-active-revenue">
              <div className="active-monthly-revenue"></div>
              <div className="active-revenue-chart">
                <MonthlyRevenueChart/>
              </div>
              <div className="revenue-rate">
                <p>Average monthly sale for every author</p>
                <span className="first-rate">68.9%</span>
                <span className="second-rate">34.5% <FiChevronUp/></span>
              </div>
          </div>
          <div className="analysis-dash analysis-active-device-type">
              <div className="device-type-cont analysis-active-user-wrap ">
                <h2>Device Type</h2>
                <span><BsThreeDotsVertical/></span>
              </div>
              <div className="device-chart">
                <DeviceType data={[
                  { label: "Desktop", value: 35 },
                  { label: "Tablet", value: 35 },
                  { label: "Mobile", value: 30 }
                ]} />
              </div>
                <div className="device-footer">
                  {/* Dynamically render device values from the same data passed to DeviceType, with color for each icon */}
                  {[
                    { label: "Desktop", value: 35, icon: <IoDesktop />, color: "#00c9ff" },
                    { label: "Tablet", value: 35, icon: <IoIosTabletPortrait />, color: "#ff7eb9" },
                    { label: "Mobile", value: 30, icon: <CiMobile4 />, color: "#fcd000" }
                  ].map((item) => (
                    <div className="device-wrap" key={item.label}>
                      <div className="device-text-wrap">
                        <span className="device-icon" style={{ color: item.color }}>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      <p>{item.value}%</p>
                    </div>
                  ))}
                </div>
          </div>
          <div className="analysis-dash analysis-active-user-cont">
            <div className="analysis-active-user-cont">
              <div className="analysis-active-user-wrap">
                <div className="active-user">
                  <h4>88.9k</h4>
                  <p>total clicks</p>
                </div>
                <div className="active-user-icon">
                    <BsThreeDotsVertical/>
                </div>
              </div>
              <div className="active-user-chart">
                <TotalClicksChart/>
              <p>12.5% from last month</p>
              </div>
            </div>
          </div>
          <div className="analysis-dash analysis-active-user-cont">
            <div className="analysis-active-user-cont">
              <div className="analysis-active-user-wrap">
                <div className="active-user">
                  <h4>68.7k</h4>
                  <p>total views</p>
                </div>
                <div className="active-user-icon">
                  <BsThreeDotsVertical/>
                </div>
              </div>
              <div className="active-user-chart">
                <TotalViewsChart/>
              </div>
                <p className="active-user-chart chart-p">34K users increased from last month</p>
            </div>
          </div>
      </div>
          <div className="analysis-total-view">
            <div className="analysis-total-view-wrap">
              <div className="analysis-total-view-cont">
                <div className="active-user">
                  <h4>93,651 <span><BsArrowDownShort />22.1%</span></h4>
                  <p>total accounts</p>
                </div>
                <div className="active-user-icon">
                  <BsThreeDotsVertical/>
                </div>
              </div>
              <div className="active-user-chart">
                  <TotalAccountsChart/>
              </div>
                <p className="active-user-chart chart-p">34K users increased from last month</p>
            </div>
          </div>
          <div className="analysis-campaigne-container">
            <div className="analysis-campaigne-stat">
                <div className="analysis-campaigne-heading">
                  <h5>Campaigne Stats</h5>
                  <span><BsThreeDotsVertical/></span>
                </div>
              <div>
                {Stat.map((item, idx) => (
                <div className="campaigne-toolkits" key={idx}>
                  <div className="toolkits-text-icon">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <div className="toolkits-text">
                    <span>{item.count}</span>
                    {item.change !== 0 && ( 
                      <span style={{ color: item.change < 0 ? 'var(--bs-red)' : 'var(--bs-green)' }}>{Math.abs(item.change)}</span>
                    )}
                  </div>
              </div>
              ))}
              </div>
            </div>
            <div className="analysis-campaigne-stat analysis-campaigne-chart">
              <div className="campaigne-chart">
                <VisitorsGrowthChart/>
              </div>
              <div className="analysis-growth-info">
                <span className="first-percent-growth">98.7% </span>
                <span className="second-percent-growth"><IoMdTrendingUp size={20} color='green'/> 43.3%</span>
                  <p>Visitors Growth</p>
              </div>
              <div className="analysis-progress-bars">
                <Progress label="clicks" value={2589} max={10000} color="#a020f0" />
                <Progress label="likes" value={6748} max={10000} color="#ffaa00" />
                <Progress label="upvotes" value={9842} max={10000} color="#00ccff" />
              </div>
            </div>

            <div className="analysis-campaigne-stat analysis-social-leads">
              <SocialLeads/>
            </div>
            <div className="analysis-campaigne-stat analysis-new-users">

            </div>
          </div>
          <div className="analysis-recent-order">

          </div>
        </>
  );
}

const Progress = ({ label, value, max, color }) => {
  const percent = (value / max) * 100;
  return (
    <div className="progress-item">
      <div className="progress-label">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%`, backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default Analysis