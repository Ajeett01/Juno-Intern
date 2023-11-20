import { useEffect, useState } from "react";
import { Button, Menu, Modal } from "@mui/material";
import styles from "./Frame.module.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { userData } from "../data/data";
import Search from "../helpers/Search";
import ModalComponent from "./Modal";

const Frame = () => {
  
  const [mainData, setMainData] = useState(userData);
  const [activeTab, setActiveTab] = useState('Pending');
  const [modal ,setModal]=useState(false)
  const [triggerReason, setTriggerReason] = useState('');
  const [riskLevel, setRiskLevel] = useState('');
  // const[filteredData, setFilteredData]= ([]);


  const handleChange = (event) => {
    const { name, value } = event.target;

    // Filter the userData based on the selected values
    const filteredUserData = userData.filter((user) => {
      const triggerReasonMatch =
        !(name === 'triggerReason') || user.triggerReason === value;
      const riskLevelMatch =
        !(name === 'riskLevel') || user.riskLevel === value;
      return triggerReasonMatch && riskLevelMatch;
    });

    console.log(event.target);
    console.log(filteredUserData);

    setMainData(filteredUserData);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleClose =()=>{
    setModal(true);
  }
  const handleModalClose =()=>{
    setModal(false);
  }

  function filterDataHandler(data){
    setMainData(data);
  }

  // useEffect(()=>{
  //   setMainData(filteredData);
  // },[])

  return (
    <div className={styles.div}>
      <h1 className={styles.monitoring}>Monitoring</h1>
      <div className={styles.sectionalTabBar}>
        <div className={styles.backgroundLine} />
        <div className={styles.section}>
          <button
            className={
              activeTab === 'Pending' ? `${styles.overview}` : styles.overview1
            }
            onClick={() => handleTabClick('Pending')}
          >
            Pending
          </button>
          {activeTab == 'Pending' && <div className={styles.highlight} />}
        </div>
        <div className={styles.section1}>
          <button
            className={
              activeTab === 'Completed'
                ? `${styles.overview}`
                : styles.overview1
            }
            onClick={() => handleTabClick('Completed')}
          >
            Completed
          </button>
          {activeTab == 'Completed' && <div className={styles.highlight2} />}
        </div>
      </div>
      {activeTab == 'Pending' ? (
        <div>
          <section className={styles.frameParent}>
            <div className={styles.tableHeaderCellParent}>
              {/* Header row */}
              <div className={styles.tableHeaderCell}>
                <div className={styles.content}>
                  <div className={styles.user}>User</div>
                </div>
              </div>
              {mainData.map((user, index) => (
                <div key={index} className={styles.tableCell1}>
                  <div className={styles.samAltmanParent}>
                    <div className={styles.user}>{user.user}</div>
                    <div className={styles.samaltman123gmailcom}>
                      {user.email}
                    </div>
                  </div>
                  <img
                    className={styles.externalLinkIcon}
                    alt=""
                    src="/externallink.svg"
                  />
                </div>
              ))}
            </div>
            <div className={styles.tableHeaderCellGroup}>
              <div className={styles.tableHeaderCell1}>
                <div className={styles.content}>
                  <div className={styles.user}>Risk level</div>
                </div>
                <img
                  className={styles.externalLinkIcon}
                  alt=""
                  src="/chevronsupdown.svg"
                />
              </div>
              {mainData.map((user, index) => (
                <div key={index} className={styles.tableCell6}>
                  <div className={styles.tableCellChild} />
                  <div className={styles.user}>{user.riskLevel}</div>
                </div>
              ))}
            </div>
            <div className={styles.tableHeaderCellContainer}>
              <div className={styles.tableHeaderCell2}>
                <div className={styles.content}>
                  <div className={styles.user}>Trigger reason</div>
                </div>
              </div>
              {mainData.map((user, index) => (
                <div key={index} className={styles.tableCell12}>
                  <div className={styles.user}>{user.triggerReason}</div>
                </div>
              ))}
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.tableHeaderCell3}>
                <div className={styles.content}>
                  <div className={styles.user}>In queue for</div>
                </div>
                <img
                  className={styles.externalLinkIcon}
                  alt=""
                  src="/chevronsupdown.svg"
                />
              </div>
              {mainData.map((user, index) => (
                <div key={index} className={styles.tableCell18}>
                  <div className={styles.daysWrapper}>
                    <div className={styles.user}>{user.inQueueFor}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.tableHeaderCellParent1}>
              <div className={styles.tableHeaderCell1}>
                <div className={styles.content}>
                  <div className={styles.user}>Date added on</div>
                </div>
                <img
                  className={styles.externalLinkIcon}
                  alt=""
                  src="/chevronsupdown.svg"
                />
              </div>
              {mainData.map((user, index) => (
                <div key={index} className={styles.tableCell18}>
                  <div className={styles.oct2023}>{user.dateAddedOn}</div>
                </div>
              ))}
            </div>
            <div className={styles.tableHeaderCellParent2}>
              <div className={styles.tableHeaderCell5}>
                <div className={styles.content}>
                  <div className={styles.user}>Previously reviewed</div>
                </div>
              </div>
              {mainData.map((user, index) => (
                <div key={index} className={styles.tableCell30}>
                  {user.previouslyReviewed.reviewed ? (
                    <div className={styles.samAltmanParent}>
                      <div className={styles.user}>{`Yes `}</div>
                      <div className={styles.samaltman123gmailcom}>
                        {user.previouslyReviewed.date}
                      </div>
                    </div>
                  ) : (
                    <div className={styles.user}>No</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div>
          <p className={styles.frameParent}>No Data Found</p>
        </div>
      )}

      {/* <input className={styles.button} placeholder="Search" type="text" /> */}
      <div className={styles.button}>
        <Search mainData={mainData} filterDataHandler={filterDataHandler} />
      </div>

      <div className={styles.triggerReasonParent}>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-filled-label">
            Trigger reason
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            name="triggerReason"
            value={triggerReason}
            onChange={handleChange}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            <MenuItem value={'FIFO'}>FIFO</MenuItem>
            <MenuItem value={'IP Change'}>IP Change</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.riskLevelParent}>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">
            Risk level
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            name="riskLevel"
            value={riskLevel}
            onChange={handleChange}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            <MenuItem value={'High'}>High</MenuItem>
            <MenuItem value={'Medium'}>Medium</MenuItem>
            <MenuItem value={'Low'}>Low</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.sidepanel}>
        <div className={styles.image1Parent}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.homeParent}>
            <div className={styles.home}>
              <div className={styles.onboarding}>Overview</div>
            </div>
            <div className={styles.home}>
              <div className={styles.onboarding}>Onboarding</div>
            </div>
            <button className={styles.home1}>
              <div className={styles.monitoring1}>Monitoring</div>
            </button>
            <div className={styles.home}>
              <div className={styles.flagging}>Flagging</div>
            </div>
            <div className={styles.home}>
              <div className={styles.onboarding}>Source of Income</div>
            </div>
            <div className={styles.home}>
              <div className={styles.onboarding}>UAR</div>
            </div>
          </div>
        </div>
        <div className={styles.content6}>
          <div className={styles.avatarText}>
            <div className={styles.avatar}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.div1}>+6</div>
            </div>
            <div className={styles.text}>
              <div className={styles.user}>Elon Musk</div>
              <div className={styles.elontwittercom}>elon@twitter.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidepanel}>
        <div className={styles.image1Parent}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.homeParent}>
            <div className={styles.home}>
              <div className={styles.onboarding}>Overview</div>
            </div>
            <div className={styles.home}>
              <div className={styles.onboarding}>Onboarding</div>
            </div>
            <div className={styles.home3}>
              <div className={styles.onboarding}>Monitoring</div>
            </div>
            <div className={styles.home}>
              <div className={styles.flagging}>Flagging</div>
            </div>
            <div className={styles.home}>
              <div className={styles.onboarding}>Source of Income</div>
            </div>
            <div className={styles.home}>
              <div className={styles.onboarding}>UAR</div>
            </div>
          </div>
        </div>
        <div className={styles.content6}>
          <div className={styles.avatarText}>
            <div className={styles.avatar}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.div1}>+6</div>
            </div>
            <div className={styles.text}>
              <div className={styles.user}>Elon Musk</div>
              <div className={styles.elontwittercom}>elon@twitter.com</div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.xCircleParent}>
        <img className={styles.externalLinkIcon} alt="" src="/xcircle.svg" />
        <div className={styles.label1} onClick={handleClose}>
          Close account
        </div>
      </button>
      {modal && <ModalComponent handleModalClose={handleModalClose} />}
    </div>
  );
};

export default Frame;
