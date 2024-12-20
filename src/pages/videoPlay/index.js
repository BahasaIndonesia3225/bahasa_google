import React, { useState, useRef, useEffect } from "react";
import { useLocation } from 'umi';
import "video.js/dist/video-js.css";
import videojs from "video.js";
import "./index.less"

export default () => {
  const stateParams = useLocation();
  const { title, url } = stateParams.state;

  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const onReadyPlay = (palyer) => {
    videoRef.current = palyer
    palyer.play();
  }

  const init = () => {
    let option = {
      controls: true,
      autoplay: false,//加载完成是否自动播放
      loop: false,//视频播放结束后，是否循环播放
      notSupportedMessage: '此视频暂无法播放，请稍后再试',
      poster: './image/cover.jpg',//视频封面
      controlBar: {
        children: [//自定义
          { name: 'playToggle' }, // 播放按钮
          {
            name: 'volumePanel', // 音量控制
            inline: true, // 不使用水平方式
          },
          { name: 'currentTimeDisplay' },   // 当前已播放时间
          { name: 'durationDisplay' },      // 总时间
          { name: 'progressControl' },      // 播放进度条
          { name: 'pictureInPictureToggle'},//支持画中画
          { name: 'FullscreenToggle'}       //支持全屏
        ]
      }
    }
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      const player = playerRef.current = videojs(videoElement, option, () => {});
      onReadyPlay(player)
    }
  }
  useEffect(() => { init() }, [])

  return (
    <div className="videoPlay">
      <p className="courseTitle">
        <span>{title}</span>
      </p>
      <div className="coursePlayArea">
        <video
          ref={videoRef}
          style={{ width: "100%", height: 300 }}
          className="video-js vjs-big-play-centered">
          <source src={url} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
