import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vphonegaga.titan',
  name: '光速虚拟机',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: 'com.vphonegaga.titan.MyNativeActivity1',
      rules: '@Image < View +2 [text="反馈"]',
      snapshotUrls: 'https://i.gkd.li/i/13292911',
    },
  ],
});
