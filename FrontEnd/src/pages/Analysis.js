import React from "react";
import LyricsBars from "../components/AnalysisPage/LyricsBars";
import { Link } from "react-router-dom";
import styles from "./Analysis.module.css"
import question from "../assets/questmark.png"
import { Tooltip } from 'antd';


const Analysis = () =>{
  const text = <span className={styles.questMent}>틀린 구간은 빨간색으로 표시됩니다.</span>;
  let resultData = localStorage.getItem('data')
  resultData = JSON.parse(resultData)
  
  return(
    <div className={styles.box}>
      <LyricsBars />
      <p className={styles.pitchMent}>{resultData.PitchScore}%의 음정 정확도를 갖고 계시네요!</p>
      <p className={styles.beatMent}>{resultData.beatScore}%의 박자 정확도를 보였습니다.</p>
      <div className={styles.mentNquest}>
        <p className={styles.praticeMent}>구간을 선택해 틀린 부분을 연습해보세요</p>
        <Tooltip placement="right" title={text}>
          <img className={styles.questIcon}alt="quest" src={question}/>
        </Tooltip>
      </div>
      <button className={styles.toMainPageBtn}>
      <Link className={styles.toMainMent} to="/">연습끝내기</Link>
      </button>
      <br/>
    </div>
  )
}

export default Analysis