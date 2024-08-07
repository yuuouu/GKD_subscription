import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.giraffe',
  name: '安易加速器',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击X',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.giraffe:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14000409',
        },
      ],
    },
  ],
});
