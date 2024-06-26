import { defineGkdApp } from '@gkd-kit/tools';

export default defineGkdApp({
  id: 'com.remo.obsbot.live',
  name: '测试步骤',
  groups: [
    {
      key: 1,
      name: '点击平台推流',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.remo.obsbot.module_main.ui.MainActivity',
          matches: 'View[vid="platform_live_bg"]',
          exampleUrls: 'https://m.gkd.li/152465495/ca35c2c5-9e9d-4eb6-a588-9e5c32fffacc',
          snapshotUrls: 'https://i.gkd.li/i/15981049',
        },
      ],
    },
    {
      key: 2,
      name: '选择方向',
      rules: [
        {
          quickFind: true,
          preKeys: [0],
          activityIds: 'com.remo.obsbot.module_main.ui.MainActivity',
          matches: 'TextView[text="竖屏"]',
          exampleUrls: 'https://m.gkd.li/152465495/90cda09d-8d56-4708-83a7-bab106d34237',
          snapshotUrls: 'https://i.gkd.li/i/15981110',
        },
        {
          quickFind: true,
          preKeys: [1],
          activityIds: 'com.remo.obsbot.module_main.ui.MainActivity',
          matches: 'Button[vid="go_scan_btn"]',
          exampleUrls: 'https://m.gkd.li/152465495/90cda09d-8d56-4708-83a7-bab106d34237',
          snapshotUrls: 'https://i.gkd.li/i/15981110',
        },
      ],
    },
    {
      key: 3,
      name: '进行下一步',
      matchTime: 2000,
      rules: [
        {
          quickFind: true,
          activityIds: 'com.remo.obsbot.module_devicescan.ui.ScanActivity',
          matches: 'Button[vid="go_live_page"]',
          exampleUrls: 'https://m.gkd.li/152465495/022a6d34-cdeb-4bd6-a684-0a548337747b',
          snapshotUrls: 'https://i.gkd.li/i/15981182',
        },
      ],
    },
    {
      key: 4,
      name: '下一步',
      desc: '这里需要滑动到底部',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.remo.obsbot.module_live.ui.LiveEditActivity',
          matches: 'TextView[vid="btn_next"]',
          exampleUrls: 'https://m.gkd.li/152465495/1022d5b0-4e33-4462-bdc5-f1498fbaf94a',
          snapshotUrls: 'https://i.gkd.li/i/15981219',
        },
      ],
    },
    {
      key: 5,
      name: '点击美颜按钮',
      actionMaximum: 1,
      rules: [
        {
          quickFind: true,
          activityIds: 'com.remo.obsbot.module_live_console.ui.LiveConsoleActivity',
          matches: 'ImageView[vid="beauty_iv"]',
          exampleUrls: 'https://m.gkd.li/152465495/a08a9dae-c90a-48fe-877a-418731e0858e',
          snapshotUrls: 'https://i.gkd.li/i/15981226',
        },
      ],
    },
  ],
});