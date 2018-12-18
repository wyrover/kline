import Kline from './js/kline'
import HighStockData from './js/highstock_data'
window.Kline = Kline

const high_chart_option = {
  chart: {
    renderTo: 'chart_0'
  },
  lang: {
    _fullscreen: '全屏'
  },
  legend: {
    enabled: true
  },
  plotOptions: {
    series: {
      turboThreshold: 0,
      point: {
        events: {}
      },
      events: {}
    },
    candlestick: {
      color: '#d75442',
      upColor: '#6ba583'
    }
  },
  tooltip: {
    xDateFormat: '%Y-%m-%d %H:%M:%S',
    color: '#f0f',
    changeDecimals: 4,
    borderColor: '#058dc7',
    crosshairs: true,
    shared: true,
    snap: 1
  },
  rangeSelector: {
    buttons: [
      {
        type: 'hour',
        count: 1,
        text: '1h'
      },
      {
        type: 'hour',
        count: 3,
        text: '3h'
      },
      {
        type: 'hour',
        count: 8,
        text: '8h'
      },
      {
        type: 'all',
        text: 'All'
      }
    ],
    selected: 3,
    inputEnabled: false
  },
  xAxis: {
    plotLines: [
      {
        color: '#FF0000',
        width: 2,
        dashStyle: 'Dot',
        value: 1527782400000
      }
    ]
  },
  yAxis: [
    {
      opposite: false,
      height: '70%',
      lineWidth: 2,
      gridLineDashStyle: 'ShortDot'
    },
    {
      opposite: false,
      top: '72%',
      height: '10%',
      offset: 0,
      lineWidth: 2
    },
    {
      opposite: false,
      title: {
        text: ''
      },
      labels: {
        enabled: false
      },
      top: '72%',
      height: '10%',
      offset: 0,
      lineWidth: 2
    },
    {
      opposite: false,
      title: {
        text: ''
      },
      top: '84%',
      height: '16%',
      offset: 0,
      lineWidth: 2
    }
  ],
  series: [
    {
      type: 'candlestick',
      id: 'primary',
      name: 'Futures_CTP_MA888',
      data: [
        {
          x: 1519228800000,
          open: 2730,
          high: 2747,
          low: 2715,
          close: 2729,
          y: 2729
        },
        {
          x: 1519315200000,
          open: 2728,
          high: 2766,
          low: 2724,
          close: 2765,
          y: 2765
        },
        {
          x: 1519574400000,
          open: 2763,
          high: 2782,
          low: 2700,
          close: 2701,
          y: 2701
        },
        {
          x: 1519660800000,
          open: 2700,
          high: 2700,
          low: 2661,
          close: 2676,
          y: 2676
        },
        {
          x: 1519747200000,
          open: 2680,
          high: 2694,
          low: 2671,
          close: 2678,
          y: 2678
        },
        {
          x: 1519833600000,
          open: 2679,
          high: 2685,
          low: 2625,
          close: 2663,
          y: 2663
        },
        {
          x: 1519920000000,
          open: 2657,
          high: 2691,
          low: 2645,
          close: 2677,
          y: 2677
        },
        {
          x: 1520179200000,
          open: 2672,
          high: 2693,
          low: 2655,
          close: 2678,
          y: 2678
        },
        {
          x: 1520265600000,
          open: 2668,
          high: 2695,
          low: 2661,
          close: 2668,
          y: 2668
        },
        {
          x: 1520352000000,
          open: 2673,
          high: 2685,
          low: 2640,
          close: 2676,
          y: 2676
        },
        {
          x: 1520438400000,
          open: 2675,
          high: 2700,
          low: 2638,
          close: 2642,
          y: 2642
        },
        {
          x: 1520524800000,
          open: 2650,
          high: 2715,
          low: 2645,
          close: 2691,
          y: 2691
        },
        {
          x: 1520784000000,
          open: 2698,
          high: 2728,
          low: 2675,
          close: 2713,
          y: 2713
        },
        {
          x: 1520870400000,
          open: 2716,
          high: 2735,
          low: 2711,
          close: 2725,
          y: 2725
        },
        {
          x: 1520956800000,
          open: 2735,
          high: 2760,
          low: 2728,
          close: 2758,
          y: 2758
        },
        {
          x: 1521043200000,
          open: 2758,
          high: 2763,
          low: 2720,
          close: 2736,
          y: 2736
        },
        {
          x: 1521129600000,
          open: 2735,
          high: 2741,
          low: 2702,
          close: 2707,
          y: 2707
        },
        {
          x: 1521388800000,
          open: 2710,
          high: 2798,
          low: 2705,
          close: 2789,
          y: 2789
        },
        {
          x: 1521475200000,
          open: 2791,
          high: 2794,
          low: 2763,
          close: 2787,
          y: 2787
        },
        {
          x: 1521561600000,
          open: 2800,
          high: 2803,
          low: 2767,
          close: 2777,
          y: 2777
        },
        {
          x: 1521648000000,
          open: 2785,
          high: 2827,
          low: 2772,
          close: 2818,
          y: 2818
        },
        {
          x: 1521734400000,
          open: 2811,
          high: 2820,
          low: 2674,
          close: 2720,
          y: 2720
        },
        {
          x: 1521993600000,
          open: 2712,
          high: 2771,
          low: 2688,
          close: 2698,
          y: 2698
        },
        {
          x: 1522080000000,
          open: 2698,
          high: 2713,
          low: 2661,
          close: 2684,
          y: 2684
        },
        {
          x: 1522166400000,
          open: 2692,
          high: 2704,
          low: 2674,
          close: 2686,
          y: 2686
        },
        {
          x: 1522252800000,
          open: 2691,
          high: 2697,
          low: 2646,
          close: 2694,
          y: 2694
        },
        {
          x: 1522339200000,
          open: 2689,
          high: 2723,
          low: 2674,
          close: 2719,
          y: 2719
        },
        {
          x: 1522598400000,
          open: 2710,
          high: 2734,
          low: 2666,
          close: 2684,
          y: 2684
        },
        {
          x: 1522684800000,
          open: 2680,
          high: 2704,
          low: 2641,
          close: 2658,
          y: 2658
        },
        {
          x: 1522771200000,
          open: 2658,
          high: 2678,
          low: 2633,
          close: 2670,
          y: 2670
        },
        {
          x: 1523203200000,
          open: 2671,
          high: 2768,
          low: 2662,
          close: 2742,
          y: 2742
        },
        {
          x: 1523289600000,
          open: 2748,
          high: 2749,
          low: 2719,
          close: 2739,
          y: 2739
        },
        {
          x: 1523376000000,
          open: 2746,
          high: 2758,
          low: 2704,
          close: 2729,
          y: 2729
        },
        {
          x: 1523462400000,
          open: 2600,
          high: 2650,
          low: 2587,
          close: 2637,
          y: 2637
        },
        {
          x: 1523548800000,
          open: 2631,
          high: 2665,
          low: 2621,
          close: 2658,
          y: 2658
        },
        {
          x: 1523808000000,
          open: 2658,
          high: 2682,
          low: 2646,
          close: 2654,
          y: 2654
        },
        {
          x: 1523894400000,
          open: 2654,
          high: 2680,
          low: 2644,
          close: 2675,
          y: 2675
        },
        {
          x: 1523980800000,
          open: 2673,
          high: 2728,
          low: 2673,
          close: 2717,
          y: 2717
        },
        {
          x: 1524067200000,
          open: 2728,
          high: 2732,
          low: 2691,
          close: 2710,
          y: 2710
        },
        {
          x: 1524153600000,
          open: 2710,
          high: 2712,
          low: 2638,
          close: 2643,
          y: 2643
        },
        {
          x: 1524412800000,
          open: 2643,
          high: 2685,
          low: 2636,
          close: 2682,
          y: 2682
        },
        {
          x: 1524499200000,
          open: 2670,
          high: 2739,
          low: 2670,
          close: 2722,
          y: 2722
        },
        {
          x: 1524585600000,
          open: 2725,
          high: 2726,
          low: 2672,
          close: 2681,
          y: 2681
        },
        {
          x: 1524672000000,
          open: 2684,
          high: 2690,
          low: 2660,
          close: 2663,
          y: 2663
        },
        {
          x: 1524758400000,
          open: 2660,
          high: 2687,
          low: 2658,
          close: 2681,
          y: 2681
        },
        {
          x: 1525190400000,
          open: 2675,
          high: 2717,
          low: 2670,
          close: 2706,
          y: 2706
        },
        {
          x: 1525276800000,
          open: 2712,
          high: 2719,
          low: 2689,
          close: 2702,
          y: 2702
        },
        {
          x: 1525363200000,
          open: 2701,
          high: 2767,
          low: 2700,
          close: 2759,
          y: 2759
        },
        {
          x: 1525622400000,
          open: 2759,
          high: 2778,
          low: 2738,
          close: 2763,
          y: 2763
        },
        {
          x: 1525708800000,
          open: 2765,
          high: 2773,
          low: 2744,
          close: 2762,
          y: 2762
        },
        {
          x: 1525795200000,
          open: 2762,
          high: 2787,
          low: 2731,
          close: 2773,
          y: 2773
        },
        {
          x: 1525881600000,
          open: 2776,
          high: 2795,
          low: 2768,
          close: 2780,
          y: 2780
        },
        {
          x: 1525968000000,
          open: 2767,
          high: 2798,
          low: 2750,
          close: 2792,
          y: 2792
        },
        {
          x: 1526227200000,
          open: 2796,
          high: 2816,
          low: 2766,
          close: 2771,
          y: 2771
        },
        {
          x: 1526313600000,
          open: 2772,
          high: 2817,
          low: 2767,
          close: 2807,
          y: 2807
        },
        {
          x: 1526400000000,
          open: 2811,
          high: 2888,
          low: 2811,
          close: 2839,
          y: 2839
        },
        {
          x: 1526486400000,
          open: 2843,
          high: 2861,
          low: 2831,
          close: 2841,
          y: 2841
        },
        {
          x: 1526572800000,
          open: 2849,
          high: 2855,
          low: 2818,
          close: 2829,
          y: 2829
        },
        {
          x: 1526832000000,
          open: 2823,
          high: 2830,
          low: 2801,
          close: 2816,
          y: 2816
        },
        {
          x: 1526918400000,
          open: 2810,
          high: 2844,
          low: 2776,
          close: 2786,
          y: 2786
        },
        {
          x: 1527004800000,
          open: 2786,
          high: 2795,
          low: 2763,
          close: 2779,
          y: 2779
        },
        {
          x: 1527091200000,
          open: 2779,
          high: 2787,
          low: 2756,
          close: 2772,
          y: 2772
        },
        {
          x: 1527177600000,
          open: 2769,
          high: 2802,
          low: 2724,
          close: 2726,
          y: 2726
        },
        {
          x: 1527436800000,
          open: 2716,
          high: 2738,
          low: 2712,
          close: 2734,
          y: 2734
        },
        {
          x: 1527523200000,
          open: 2736,
          high: 2748,
          low: 2726,
          close: 2742,
          y: 2742
        },
        {
          x: 1527609600000,
          open: 2743,
          high: 2760,
          low: 2717,
          close: 2719,
          y: 2719
        },
        {
          x: 1527696000000,
          open: 2717,
          high: 2772,
          low: 2717,
          close: 2758,
          y: 2758
        },
        {
          x: 1527782400000,
          open: 2755,
          high: 2792,
          low: 2734,
          close: 2791,
          y: 2791
        },
        {
          x: 1528041600000,
          open: 2791,
          high: 2797,
          low: 2762,
          close: 2769,
          y: 2769
        },
        {
          x: 1528128000000,
          open: 2766,
          high: 2770,
          low: 2727,
          close: 2739,
          y: 2739
        },
        {
          x: 1528214400000,
          open: 2731,
          high: 2755,
          low: 2731,
          close: 2747,
          y: 2747
        },
        {
          x: 1528300800000,
          open: 2745,
          high: 2819,
          low: 2743,
          close: 2810,
          y: 2810
        },
        {
          x: 1528387200000,
          open: 2810,
          high: 2820,
          low: 2793,
          close: 2802,
          y: 2802
        },
        {
          x: 1528646400000,
          open: 2802,
          high: 2838,
          low: 2782,
          close: 2823,
          y: 2823
        },
        {
          x: 1528732800000,
          open: 2820,
          high: 2855,
          low: 2812,
          close: 2847,
          y: 2847
        },
        {
          x: 1528819200000,
          open: 2846,
          high: 2849,
          low: 2815,
          close: 2820,
          y: 2820
        },
        {
          x: 1528905600000,
          open: 2827,
          high: 2839,
          low: 2803,
          close: 2813,
          y: 2813
        },
        {
          x: 1528992000000,
          open: 2818,
          high: 2835,
          low: 2805,
          close: 2832,
          y: 2832
        },
        {
          x: 1529337600000,
          open: 2820,
          high: 2829,
          low: 2763,
          close: 2774,
          y: 2774
        },
        {
          x: 1529424000000,
          open: 2782,
          high: 2797,
          low: 2756,
          close: 2790,
          y: 2790
        },
        {
          x: 1529510400000,
          open: 2789,
          high: 2797,
          low: 2740,
          close: 2743,
          y: 2743
        },
        {
          x: 1529596800000,
          open: 2738,
          high: 2749,
          low: 2719,
          close: 2737,
          y: 2737
        },
        {
          x: 1529856000000,
          open: 2744,
          high: 2769,
          low: 2740,
          close: 2744,
          y: 2744
        },
        {
          x: 1529942400000,
          open: 2744,
          high: 2747,
          low: 2688,
          close: 2730,
          y: 2730
        },
        {
          x: 1530028800000,
          open: 2732,
          high: 2758,
          low: 2731,
          close: 2753,
          y: 2753
        },
        {
          x: 1530115200000,
          open: 2755,
          high: 2810,
          low: 2755,
          close: 2797,
          y: 2797
        },
        {
          x: 1530201600000,
          open: 2801,
          high: 2842,
          low: 2787,
          close: 2839,
          y: 2839
        },
        {
          x: 1530460800000,
          open: 2842,
          high: 2867,
          low: 2810,
          close: 2824,
          y: 2824
        },
        {
          x: 1530547200000,
          open: 2826,
          high: 2842,
          low: 2816,
          close: 2836,
          y: 2836
        },
        {
          x: 1530633600000,
          open: 2838,
          high: 2894,
          low: 2813,
          close: 2879,
          y: 2879
        },
        {
          x: 1530720000000,
          open: 2876,
          high: 2902,
          low: 2856,
          close: 2887,
          y: 2887
        },
        {
          x: 1530806400000,
          open: 2890,
          high: 2917,
          low: 2869,
          close: 2906,
          y: 2906
        },
        {
          x: 1531065600000,
          open: 2904,
          high: 2908,
          low: 2880,
          close: 2891,
          y: 2891
        },
        {
          x: 1531152000000,
          open: 2899,
          high: 2926,
          low: 2876,
          close: 2917,
          y: 2917
        },
        {
          x: 1531238400000,
          open: 2916,
          high: 2930,
          low: 2888,
          close: 2902,
          y: 2902
        },
        {
          x: 1531324800000,
          open: 2900,
          high: 2923,
          low: 2868,
          close: 2919,
          y: 2919
        },
        {
          x: 1531411200000,
          open: 2917,
          high: 2936,
          low: 2876,
          close: 2879,
          y: 2879
        },
        {
          x: 1531670400000,
          open: 2872,
          high: 2891,
          low: 2860,
          close: 2864,
          y: 2864
        },
        {
          x: 1531756800000,
          open: 2857,
          high: 2874,
          low: 2842,
          close: 2862,
          y: 2862
        },
        {
          x: 1531843200000,
          open: 2863,
          high: 2875,
          low: 2853,
          close: 2869,
          y: 2869
        },
        {
          x: 1531929600000,
          open: 2872,
          high: 2917,
          low: 2872,
          close: 2894,
          y: 2894
        },
        {
          x: 1532016000000,
          open: 2888,
          high: 2928,
          low: 2875,
          close: 2926,
          y: 2926
        },
        {
          x: 1532275200000,
          open: 2923,
          high: 2940,
          low: 2910,
          close: 2926,
          y: 2926
        },
        {
          x: 1532361600000,
          open: 2929,
          high: 2982,
          low: 2923,
          close: 2963,
          y: 2963
        },
        {
          x: 1532448000000,
          open: 2964,
          high: 2969,
          low: 2921,
          close: 2924,
          y: 2924
        },
        {
          x: 1532534400000,
          open: 2923,
          high: 2926,
          low: 2891,
          close: 2912,
          y: 2912
        },
        {
          x: 1532620800000,
          open: 2909,
          high: 2935,
          low: 2907,
          close: 2924,
          y: 2924
        },
        {
          x: 1532880000000,
          open: 2929,
          high: 2992,
          low: 2920,
          close: 2972,
          y: 2972
        },
        {
          x: 1532966400000,
          open: 2976,
          high: 2986,
          low: 2949,
          close: 2954,
          y: 2954
        },
        {
          x: 1533052800000,
          open: 2950,
          high: 2984,
          low: 2927,
          close: 2947,
          y: 2947
        },
        {
          x: 1533139200000,
          open: 2939,
          high: 3020,
          low: 2932,
          close: 3018,
          y: 3018
        },
        {
          x: 1533225600000,
          open: 3019,
          high: 3121,
          low: 3005,
          close: 3121,
          y: 3121
        },
        {
          x: 1533484800000,
          open: 3166,
          high: 3294,
          low: 3156,
          close: 3225,
          y: 3225
        },
        {
          x: 1533571200000,
          open: 3217,
          high: 3254,
          low: 3183,
          close: 3237,
          y: 3237
        },
        {
          x: 1533657600000,
          open: 3240,
          high: 3246,
          low: 3153,
          close: 3193,
          y: 3193
        },
        {
          x: 1533744000000,
          open: 3313,
          high: 3329,
          low: 3271,
          close: 3289,
          y: 3289
        },
        {
          x: 1533830400000,
          open: 3291,
          high: 3325,
          low: 3223,
          close: 3245,
          y: 3245
        },
        {
          x: 1534089600000,
          open: 3250,
          high: 3274,
          low: 3223,
          close: 3256,
          y: 3256
        },
        {
          x: 1534176000000,
          open: 3258,
          high: 3407,
          low: 3249,
          close: 3361,
          y: 3361
        },
        {
          x: 1534262400000,
          open: 3367,
          high: 3380,
          low: 3305,
          close: 3338,
          y: 3338
        },
        {
          x: 1534348800000,
          open: 3336,
          high: 3403,
          low: 3245,
          close: 3327,
          y: 3327
        },
        {
          x: 1534435200000,
          open: 3338,
          high: 3356,
          low: 3251,
          close: 3266,
          y: 3266
        },
        {
          x: 1534694400000,
          open: 3275,
          high: 3428,
          low: 3212,
          close: 3368,
          y: 3368
        },
        {
          x: 1534780800000,
          open: 3364,
          high: 3394,
          low: 3305,
          close: 3337,
          y: 3337
        },
        {
          x: 1534867200000,
          open: 3336,
          high: 3520,
          low: 3315,
          close: 3387,
          y: 3387
        },
        {
          x: 1534953600000,
          open: 3390,
          high: 3445,
          low: 3301,
          close: 3309,
          y: 3309
        },
        {
          x: 1535040000000,
          open: 3310,
          high: 3319,
          low: 3266,
          close: 3301,
          y: 3301
        },
        {
          x: 1535299200000,
          open: 3308,
          high: 3333,
          low: 3257,
          close: 3299,
          y: 3299
        },
        {
          x: 1535385600000,
          open: 3308,
          high: 3373,
          low: 3277,
          close: 3298,
          y: 3298
        },
        {
          x: 1535472000000,
          open: 3298,
          high: 3344,
          low: 3251,
          close: 3278,
          y: 3278
        },
        {
          x: 1535558400000,
          open: 3273,
          high: 3299,
          low: 3230,
          close: 3299,
          y: 3299
        },
        {
          x: 1535644800000,
          open: 3295,
          high: 3330,
          low: 3258,
          close: 3262,
          y: 3262
        },
        {
          x: 1535904000000,
          open: 3261,
          high: 3272,
          low: 3166,
          close: 3212,
          y: 3212
        },
        {
          x: 1535990400000,
          open: 3215,
          high: 3252,
          low: 3192,
          close: 3244,
          y: 3244
        },
        {
          x: 1536076800000,
          open: 3250,
          high: 3300,
          low: 3228,
          close: 3281,
          y: 3281
        },
        {
          x: 1536163200000,
          open: 3285,
          high: 3287,
          low: 3252,
          close: 3276,
          y: 3276
        },
        {
          x: 1536249600000,
          open: 3276,
          high: 3367,
          low: 3263,
          close: 3356,
          y: 3356
        },
        {
          x: 1536508800000,
          open: 3360,
          high: 3408,
          low: 3339,
          close: 3394,
          y: 3394
        },
        {
          x: 1536595200000,
          open: 3400,
          high: 3403,
          low: 3333,
          close: 3338,
          y: 3338
        },
        {
          x: 1536681600000,
          open: 3343,
          high: 3367,
          low: 3230,
          close: 3277,
          y: 3277
        },
        {
          x: 1536768000000,
          open: 3272,
          high: 3287,
          low: 3233,
          close: 3239,
          y: 3239
        },
        {
          x: 1536854400000,
          open: 3250,
          high: 3282,
          low: 3244,
          close: 3259,
          y: 3259
        },
        {
          x: 1537113600000,
          open: 3263,
          high: 3276,
          low: 3202,
          close: 3264,
          y: 3264
        },
        {
          x: 1537200000000,
          open: 3264,
          high: 3276,
          low: 3226,
          close: 3249,
          y: 3249
        },
        {
          x: 1537286400000,
          open: 3261,
          high: 3340,
          low: 3256,
          close: 3337,
          y: 3337
        },
        {
          x: 1537372800000,
          open: 3337,
          high: 3359,
          low: 3324,
          close: 3340,
          y: 3340
        },
        {
          x: 1537459200000,
          open: 3339,
          high: 3356,
          low: 3312,
          close: 3340,
          y: 3340
        },
        {
          x: 1537804800000,
          open: 3349,
          high: 3367,
          low: 3306,
          close: 3331,
          y: 3331
        },
        {
          x: 1537891200000,
          open: 3333,
          high: 3335,
          low: 3241,
          close: 3250,
          y: 3250
        },
        {
          x: 1537977600000,
          open: 3243,
          high: 3278,
          low: 3232,
          close: 3249,
          y: 3249
        },
        {
          x: 1538064000000,
          open: 3252,
          high: 3264,
          low: 3192,
          close: 3228,
          y: 3228
        },
        {
          x: 1538928000000,
          open: 3245,
          high: 3328,
          low: 3216,
          close: 3325,
          y: 3325
        },
        {
          x: 1539014400000,
          open: 3320,
          high: 3422,
          low: 3314,
          close: 3422,
          y: 3422
        },
        {
          x: 1539100800000,
          open: 3444,
          high: 3468,
          low: 3414,
          close: 3448,
          y: 3448
        },
        {
          x: 1539187200000,
          open: 3445,
          high: 3448,
          low: 3361,
          close: 3389,
          y: 3389
        },
        {
          x: 1539273600000,
          open: 3400,
          high: 3507,
          low: 3383,
          close: 3492,
          y: 3492
        },
        {
          x: 1539532800000,
          open: 3492,
          high: 3525,
          low: 3456,
          close: 3466,
          y: 3466
        },
        {
          x: 1539619200000,
          open: 3462,
          high: 3465,
          low: 3336,
          close: 3367,
          y: 3367
        },
        {
          x: 1539705600000,
          open: 3366,
          high: 3407,
          low: 3360,
          close: 3387,
          y: 3387
        },
        {
          x: 1539792000000,
          open: 3377,
          high: 3395,
          low: 3333,
          close: 3385,
          y: 3385
        },
        {
          x: 1539878400000,
          open: 3362,
          high: 3398,
          low: 3346,
          close: 3350,
          y: 3350
        },
        {
          x: 1540137600000,
          open: 3355,
          high: 3364,
          low: 3303,
          close: 3331,
          y: 3331
        },
        {
          x: 1540224000000,
          open: 3321,
          high: 3348,
          low: 3313,
          close: 3327,
          y: 3327
        },
        {
          x: 1540310400000,
          open: 3312,
          high: 3368,
          low: 3287,
          close: 3365,
          y: 3365
        },
        {
          x: 1540396800000,
          open: 3364,
          high: 3381,
          low: 3235,
          close: 3256,
          y: 3256
        },
        {
          x: 1540483200000,
          open: 3250,
          high: 3260,
          low: 3211,
          close: 3224,
          y: 3224
        },
        {
          x: 1540742400000,
          open: 3223,
          high: 3246,
          low: 3072,
          close: 3072,
          y: 3072
        },
        {
          x: 1540828800000,
          open: 3050,
          high: 3082,
          low: 3010,
          close: 3020,
          y: 3020
        },
        {
          x: 1540915200000,
          open: 3015,
          high: 3032,
          low: 2966,
          close: 3018,
          y: 3018
        },
        {
          x: 1541001600000,
          open: 3017,
          high: 3028,
          low: 2905,
          close: 2923,
          y: 2923
        },
        {
          x: 1541088000000,
          open: 2927,
          high: 2961,
          low: 2909,
          close: 2950,
          y: 2950
        },
        {
          x: 1541347200000,
          open: 2945,
          high: 2997,
          low: 2939,
          close: 2988,
          y: 2988
        },
        {
          x: 1541433600000,
          open: 2990,
          high: 2994,
          low: 2872,
          close: 2895,
          y: 2895
        },
        {
          x: 1541520000000,
          open: 2895,
          high: 2907,
          low: 2802,
          close: 2833,
          y: 2833
        },
        {
          x: 1541606400000,
          open: 2845,
          high: 2870,
          low: 2807,
          close: 2860,
          y: 2860
        },
        {
          x: 1541692800000,
          open: 2854,
          high: 2857,
          low: 2810,
          close: 2837,
          y: 2837
        },
        {
          x: 1541952000000,
          open: 2826,
          high: 2862,
          low: 2766,
          close: 2796,
          y: 2796
        },
        {
          x: 1542038400000,
          open: 2796,
          high: 2815,
          low: 2772,
          close: 2793,
          y: 2793
        },
        {
          x: 1542124800000,
          open: 2798,
          high: 2834,
          low: 2673,
          close: 2715,
          y: 2715
        },
        {
          x: 1542211200000,
          open: 2735,
          high: 2748,
          low: 2717,
          close: 2739,
          y: 2739
        },
        {
          x: 1542297600000,
          open: 2744,
          high: 2792,
          low: 2709,
          close: 2773,
          y: 2773
        },
        {
          x: 1542556800000,
          open: 2787,
          high: 2789,
          low: 2714,
          close: 2722,
          y: 2722
        },
        {
          x: 1542643200000,
          open: 2726,
          high: 2732,
          low: 2659,
          close: 2677,
          y: 2677
        },
        {
          x: 1542729600000,
          open: 2674,
          high: 2677,
          low: 2557,
          close: 2557,
          y: 2557
        }
      ],
      showInLegend: false,
      yAxis: 0
    },
    {
      name: 'Order',
      type: 'flags',
      shape: 'circlepin',
      onSeries: 'primary',
      showInLegend: true,
      data: [
        {
          x: 1529937961000,
          shape: 'circlepin',
          color: 'green',
          fillColor: 'white',
          title: '开空',
          text: '卖出: 11<br>价格: 2698<br>单号: 1<br>品种: MA888'
        },
        {
          x: 1530109201000,
          title: '平空',
          shape: 'flag',
          color: 'red',
          fillColor: '#7cb5ec',
          text: '买入: 11<br>价格: 2798<br>单号: 2<br>品种: MA888'
        },
        {
          x: 1530497161000,
          title: '开多',
          shape: 'flag',
          color: 'red',
          fillColor: 'white',
          text: '买入: 11<br>价格: 2862<br>单号: 3<br>品种: MA888'
        },
        {
          x: 1530675121000,
          title: '开多',
          shape: 'flag',
          color: 'red',
          fillColor: 'white',
          text: '买入: 11<br>价格: 2885<br>单号: 4<br>品种: MA888'
        },
        {
          x: 1530855961000,
          title: '开多',
          shape: 'flag',
          color: 'red',
          fillColor: 'white',
          text: '买入: 10<br>价格: 2923<br>单号: 5<br>品种: MA888'
        },
        {
          x: 1532094361000,
          title: '开多',
          shape: 'flag',
          color: 'red',
          fillColor: 'white',
          text: '买入: 11<br>价格: 2946<br>单号: 6<br>品种: MA888'
        },
        {
          x: 1532395921000,
          title: '开多',
          shape: 'flag',
          color: 'red',
          fillColor: 'white',
          text: '买入: 11<br>价格: 2971<br>单号: 7<br>品种: MA888'
        },
        {
          x: 1535942225800,
          shape: 'circlepin',
          color: 'green',
          fillColor: '#ffffc5',
          title: '平多',
          text: '卖出: 54<br>价格: 3171<br>单号: 8<br>品种: MA888'
        },
        {
          x: 1539068281000,
          title: '开多',
          shape: 'flag',
          color: 'red',
          fillColor: 'white',
          text: '买入: 8<br>价格: 3428<br>单号: 9<br>品种: MA888'
        },
        {
          x: 1539090361000,
          title: '开多',
          shape: 'flag',
          color: 'red',
          fillColor: 'white',
          text: '买入: 8<br>价格: 3467<br>单号: 10<br>品种: MA888'
        },
        {
          x: 1539326761000,
          title: '开多',
          shape: 'flag',
          color: 'red',
          fillColor: 'white',
          text: '买入: 8<br>价格: 3513<br>单号: 11<br>品种: MA888'
        },
        {
          x: 1539671521000,
          shape: 'circlepin',
          color: 'green',
          fillColor: '#ffffc5',
          title: '平多',
          text: '卖出: 24<br>价格: 3348<br>单号: 12<br>品种: MA888'
        },
        {
          x: 1540776721000,
          shape: 'circlepin',
          color: 'green',
          fillColor: 'white',
          title: '开空',
          text: '卖出: 8<br>价格: 3140<br>单号: 13<br>品种: MA888'
        },
        {
          x: 1540818001200,
          shape: 'circlepin',
          color: 'green',
          fillColor: 'white',
          title: '开空',
          text: '卖出: 8<br>价格: 3044<br>单号: 14<br>品种: MA888'
        },
        {
          x: 1540905601000,
          shape: 'circlepin',
          color: 'green',
          fillColor: 'white',
          title: '开空',
          text: '卖出: 8<br>价格: 3000<br>单号: 15<br>品种: MA888'
        },
        {
          x: 1541036225800,
          shape: 'circlepin',
          color: 'green',
          fillColor: 'white',
          title: '开空',
          text: '卖出: 8<br>价格: 2932<br>单号: 16<br>品种: MA888'
        },
        {
          x: 1542718801000,
          shape: 'circlepin',
          color: 'green',
          fillColor: 'white',
          title: '开空',
          text: '卖出: 9<br>价格: 2668<br>单号: 17<br>品种: MA888'
        }
      ]
    },
    {
      type: 'column',
      name: 'Volume',
      id: 'volume',
      color: '#a6d3a6',
      data: [
        {
          x: 1519228800000,
          y: 310466,
          color: '#ffa6a6'
        },
        {
          x: 1519315200000,
          y: 630495,
          color: '#a6d3a6'
        },
        {
          x: 1519574400000,
          y: 924729,
          color: '#ffa6a6'
        },
        {
          x: 1519660800000,
          y: 944077,
          color: '#ffa6a6'
        },
        {
          x: 1519747200000,
          y: 650664,
          color: '#ffa6a6'
        },
        {
          x: 1519833600000,
          y: 981806,
          color: '#ffa6a6'
        },
        {
          x: 1519920000000,
          y: 848098,
          color: '#a6d3a6'
        },
        {
          x: 1520179200000,
          y: 772463,
          color: '#a6d3a6'
        },
        {
          x: 1520265600000,
          y: 813204,
          color: '#a6d3a6'
        },
        {
          x: 1520352000000,
          y: 917967,
          color: '#a6d3a6'
        },
        {
          x: 1520438400000,
          y: 1222660,
          color: '#ffa6a6'
        },
        {
          x: 1520524800000,
          y: 1345754,
          color: '#a6d3a6'
        },
        {
          x: 1520784000000,
          y: 1138340,
          color: '#a6d3a6'
        },
        {
          x: 1520870400000,
          y: 784494,
          color: '#a6d3a6'
        },
        {
          x: 1520956800000,
          y: 790793,
          color: '#a6d3a6'
        },
        {
          x: 1521043200000,
          y: 681940,
          color: '#ffa6a6'
        },
        {
          x: 1521129600000,
          y: 778979,
          color: '#ffa6a6'
        },
        {
          x: 1521388800000,
          y: 1042930,
          color: '#a6d3a6'
        },
        {
          x: 1521475200000,
          y: 752614,
          color: '#ffa6a6'
        },
        {
          x: 1521561600000,
          y: 658342,
          color: '#ffa6a6'
        },
        {
          x: 1521648000000,
          y: 754710,
          color: '#a6d3a6'
        },
        {
          x: 1521734400000,
          y: 1441050,
          color: '#ffa6a6'
        },
        {
          x: 1521993600000,
          y: 1016313,
          color: '#ffa6a6'
        },
        {
          x: 1522080000000,
          y: 1025986,
          color: '#ffa6a6'
        },
        {
          x: 1522166400000,
          y: 695968,
          color: '#ffa6a6'
        },
        {
          x: 1522252800000,
          y: 891138,
          color: '#a6d3a6'
        },
        {
          x: 1522339200000,
          y: 682219,
          color: '#a6d3a6'
        },
        {
          x: 1522598400000,
          y: 665072,
          color: '#ffa6a6'
        },
        {
          x: 1522684800000,
          y: 717631,
          color: '#ffa6a6'
        },
        {
          x: 1522771200000,
          y: 546980,
          color: '#a6d3a6'
        },
        {
          x: 1523203200000,
          y: 615545,
          color: '#a6d3a6'
        },
        {
          x: 1523289600000,
          y: 444666,
          color: '#ffa6a6'
        },
        {
          x: 1523376000000,
          y: 366404,
          color: '#ffa6a6'
        },
        {
          x: 1523462400000,
          y: 799835,
          color: '#a6d3a6'
        },
        {
          x: 1523548800000,
          y: 689188,
          color: '#a6d3a6'
        },
        {
          x: 1523808000000,
          y: 735283,
          color: '#ffa6a6'
        },
        {
          x: 1523894400000,
          y: 603568,
          color: '#a6d3a6'
        },
        {
          x: 1523980800000,
          y: 963045,
          color: '#a6d3a6'
        },
        {
          x: 1524067200000,
          y: 791563,
          color: '#ffa6a6'
        },
        {
          x: 1524153600000,
          y: 964688,
          color: '#ffa6a6'
        },
        {
          x: 1524412800000,
          y: 730631,
          color: '#a6d3a6'
        },
        {
          x: 1524499200000,
          y: 912737,
          color: '#a6d3a6'
        },
        {
          x: 1524585600000,
          y: 862252,
          color: '#ffa6a6'
        },
        {
          x: 1524672000000,
          y: 716250,
          color: '#ffa6a6'
        },
        {
          x: 1524758400000,
          y: 624865,
          color: '#a6d3a6'
        },
        {
          x: 1525190400000,
          y: 771594,
          color: '#a6d3a6'
        },
        {
          x: 1525276800000,
          y: 593556,
          color: '#ffa6a6'
        },
        {
          x: 1525363200000,
          y: 1072712,
          color: '#a6d3a6'
        },
        {
          x: 1525622400000,
          y: 760684,
          color: '#a6d3a6'
        },
        {
          x: 1525708800000,
          y: 540840,
          color: '#ffa6a6'
        },
        {
          x: 1525795200000,
          y: 1048106,
          color: '#a6d3a6'
        },
        {
          x: 1525881600000,
          y: 638963,
          color: '#a6d3a6'
        },
        {
          x: 1525968000000,
          y: 808766,
          color: '#a6d3a6'
        },
        {
          x: 1526227200000,
          y: 827876,
          color: '#ffa6a6'
        },
        {
          x: 1526313600000,
          y: 787772,
          color: '#a6d3a6'
        },
        {
          x: 1526400000000,
          y: 1393288,
          color: '#a6d3a6'
        },
        {
          x: 1526486400000,
          y: 654696,
          color: '#ffa6a6'
        },
        {
          x: 1526572800000,
          y: 745692,
          color: '#ffa6a6'
        },
        {
          x: 1526832000000,
          y: 688937,
          color: '#ffa6a6'
        },
        {
          x: 1526918400000,
          y: 845808,
          color: '#ffa6a6'
        },
        {
          x: 1527004800000,
          y: 615032,
          color: '#ffa6a6'
        },
        {
          x: 1527091200000,
          y: 574174,
          color: '#ffa6a6'
        },
        {
          x: 1527177600000,
          y: 920062,
          color: '#ffa6a6'
        },
        {
          x: 1527436800000,
          y: 548630,
          color: '#a6d3a6'
        },
        {
          x: 1527523200000,
          y: 393703,
          color: '#a6d3a6'
        },
        {
          x: 1527609600000,
          y: 689620,
          color: '#ffa6a6'
        },
        {
          x: 1527696000000,
          y: 758622,
          color: '#a6d3a6'
        },
        {
          x: 1527782400000,
          y: 1391889,
          color: '#a6d3a6'
        },
        {
          x: 1528041600000,
          y: 1216582,
          color: '#ffa6a6'
        },
        {
          x: 1528128000000,
          y: 1250896,
          color: '#ffa6a6'
        },
        {
          x: 1528214400000,
          y: 896657,
          color: '#a6d3a6'
        },
        {
          x: 1528300800000,
          y: 2051918,
          color: '#a6d3a6'
        },
        {
          x: 1528387200000,
          y: 1384720,
          color: '#ffa6a6'
        },
        {
          x: 1528646400000,
          y: 1970638,
          color: '#a6d3a6'
        },
        {
          x: 1528732800000,
          y: 1300486,
          color: '#a6d3a6'
        },
        {
          x: 1528819200000,
          y: 1103701,
          color: '#ffa6a6'
        },
        {
          x: 1528905600000,
          y: 1307798,
          color: '#ffa6a6'
        },
        {
          x: 1528992000000,
          y: 1086813,
          color: '#a6d3a6'
        },
        {
          x: 1529337600000,
          y: 1171439,
          color: '#ffa6a6'
        },
        {
          x: 1529424000000,
          y: 1053357,
          color: '#a6d3a6'
        },
        {
          x: 1529510400000,
          y: 1279668,
          color: '#ffa6a6'
        },
        {
          x: 1529596800000,
          y: 1269911,
          color: '#ffa6a6'
        },
        {
          x: 1529856000000,
          y: 1130531,
          color: '#a6d3a6'
        },
        {
          x: 1529942400000,
          y: 1828291,
          color: '#ffa6a6'
        },
        {
          x: 1530028800000,
          y: 1148882,
          color: '#a6d3a6'
        },
        {
          x: 1530115200000,
          y: 1517551,
          color: '#a6d3a6'
        },
        {
          x: 1530201600000,
          y: 1357728,
          color: '#a6d3a6'
        },
        {
          x: 1530460800000,
          y: 1361912,
          color: '#ffa6a6'
        },
        {
          x: 1530547200000,
          y: 936817,
          color: '#a6d3a6'
        },
        {
          x: 1530633600000,
          y: 1880276,
          color: '#a6d3a6'
        },
        {
          x: 1530720000000,
          y: 2144662,
          color: '#a6d3a6'
        },
        {
          x: 1530806400000,
          y: 1794460,
          color: '#a6d3a6'
        },
        {
          x: 1531065600000,
          y: 1208236,
          color: '#ffa6a6'
        },
        {
          x: 1531152000000,
          y: 1444046,
          color: '#a6d3a6'
        },
        {
          x: 1531238400000,
          y: 1504025,
          color: '#ffa6a6'
        },
        {
          x: 1531324800000,
          y: 1879008,
          color: '#a6d3a6'
        },
        {
          x: 1531411200000,
          y: 1528399,
          color: '#ffa6a6'
        },
        {
          x: 1531670400000,
          y: 1252101,
          color: '#ffa6a6'
        },
        {
          x: 1531756800000,
          y: 1112726,
          color: '#a6d3a6'
        },
        {
          x: 1531843200000,
          y: 789183,
          color: '#a6d3a6'
        },
        {
          x: 1531929600000,
          y: 1540326,
          color: '#a6d3a6'
        },
        {
          x: 1532016000000,
          y: 1416117,
          color: '#a6d3a6'
        },
        {
          x: 1532275200000,
          y: 1206323,
          color: '#a6d3a6'
        },
        {
          x: 1532361600000,
          y: 1426132,
          color: '#a6d3a6'
        },
        {
          x: 1532448000000,
          y: 1336475,
          color: '#ffa6a6'
        },
        {
          x: 1532534400000,
          y: 1460492,
          color: '#ffa6a6'
        },
        {
          x: 1532620800000,
          y: 1125791,
          color: '#a6d3a6'
        },
        {
          x: 1532880000000,
          y: 1602286,
          color: '#a6d3a6'
        },
        {
          x: 1532966400000,
          y: 1013087,
          color: '#ffa6a6'
        },
        {
          x: 1533052800000,
          y: 1391069,
          color: '#ffa6a6'
        },
        {
          x: 1533139200000,
          y: 1695643,
          color: '#a6d3a6'
        },
        {
          x: 1533225600000,
          y: 1733568,
          color: '#a6d3a6'
        },
        {
          x: 1533484800000,
          y: 3483938,
          color: '#a6d3a6'
        },
        {
          x: 1533571200000,
          y: 2102836,
          color: '#a6d3a6'
        },
        {
          x: 1533657600000,
          y: 1660905,
          color: '#ffa6a6'
        },
        {
          x: 1533744000000,
          y: 1828637,
          color: '#ffa6a6'
        },
        {
          x: 1533830400000,
          y: 2389543,
          color: '#ffa6a6'
        },
        {
          x: 1534089600000,
          y: 1510762,
          color: '#a6d3a6'
        },
        {
          x: 1534176000000,
          y: 4275552,
          color: '#a6d3a6'
        },
        {
          x: 1534262400000,
          y: 2648673,
          color: '#ffa6a6'
        },
        {
          x: 1534348800000,
          y: 5074743,
          color: '#ffa6a6'
        },
        {
          x: 1534435200000,
          y: 3544436,
          color: '#ffa6a6'
        },
        {
          x: 1534694400000,
          y: 4221731,
          color: '#a6d3a6'
        },
        {
          x: 1534780800000,
          y: 3247840,
          color: '#ffa6a6'
        },
        {
          x: 1534867200000,
          y: 6667230,
          color: '#a6d3a6'
        },
        {
          x: 1534953600000,
          y: 4956854,
          color: '#ffa6a6'
        },
        {
          x: 1535040000000,
          y: 3169207,
          color: '#ffa6a6'
        },
        {
          x: 1535299200000,
          y: 2961631,
          color: '#ffa6a6'
        },
        {
          x: 1535385600000,
          y: 3653157,
          color: '#ffa6a6'
        },
        {
          x: 1535472000000,
          y: 3926084,
          color: '#ffa6a6'
        },
        {
          x: 1535558400000,
          y: 3597658,
          color: '#a6d3a6'
        },
        {
          x: 1535644800000,
          y: 3832649,
          color: '#ffa6a6'
        },
        {
          x: 1535904000000,
          y: 3802416,
          color: '#ffa6a6'
        },
        {
          x: 1535990400000,
          y: 2828792,
          color: '#a6d3a6'
        },
        {
          x: 1536076800000,
          y: 3055643,
          color: '#a6d3a6'
        },
        {
          x: 1536163200000,
          y: 2252019,
          color: '#ffa6a6'
        },
        {
          x: 1536249600000,
          y: 3493958,
          color: '#a6d3a6'
        },
        {
          x: 1536508800000,
          y: 2778444,
          color: '#a6d3a6'
        },
        {
          x: 1536595200000,
          y: 2729690,
          color: '#ffa6a6'
        },
        {
          x: 1536681600000,
          y: 3643206,
          color: '#ffa6a6'
        },
        {
          x: 1536768000000,
          y: 2089755,
          color: '#ffa6a6'
        },
        {
          x: 1536854400000,
          y: 1725135,
          color: '#a6d3a6'
        },
        {
          x: 1537113600000,
          y: 3742999,
          color: '#a6d3a6'
        },
        {
          x: 1537200000000,
          y: 2884243,
          color: '#ffa6a6'
        },
        {
          x: 1537286400000,
          y: 3107065,
          color: '#a6d3a6'
        },
        {
          x: 1537372800000,
          y: 2116696,
          color: '#a6d3a6'
        },
        {
          x: 1537459200000,
          y: 1918517,
          color: '#a6d3a6'
        },
        {
          x: 1537804800000,
          y: 1516000,
          color: '#ffa6a6'
        },
        {
          x: 1537891200000,
          y: 2509567,
          color: '#ffa6a6'
        },
        {
          x: 1537977600000,
          y: 1602673,
          color: '#a6d3a6'
        },
        {
          x: 1538064000000,
          y: 2276375,
          color: '#ffa6a6'
        },
        {
          x: 1538928000000,
          y: 1419687,
          color: '#a6d3a6'
        },
        {
          x: 1539014400000,
          y: 3371117,
          color: '#a6d3a6'
        },
        {
          x: 1539100800000,
          y: 2737018,
          color: '#a6d3a6'
        },
        {
          x: 1539187200000,
          y: 2787959,
          color: '#ffa6a6'
        },
        {
          x: 1539273600000,
          y: 3871190,
          color: '#a6d3a6'
        },
        {
          x: 1539532800000,
          y: 3222342,
          color: '#ffa6a6'
        },
        {
          x: 1539619200000,
          y: 3887703,
          color: '#ffa6a6'
        },
        {
          x: 1539705600000,
          y: 2194650,
          color: '#a6d3a6'
        },
        {
          x: 1539792000000,
          y: 3638374,
          color: '#a6d3a6'
        },
        {
          x: 1539878400000,
          y: 3558706,
          color: '#ffa6a6'
        },
        {
          x: 1540137600000,
          y: 3394918,
          color: '#ffa6a6'
        },
        {
          x: 1540224000000,
          y: 2105498,
          color: '#a6d3a6'
        },
        {
          x: 1540310400000,
          y: 2951966,
          color: '#a6d3a6'
        },
        {
          x: 1540396800000,
          y: 3872989,
          color: '#ffa6a6'
        },
        {
          x: 1540483200000,
          y: 2853589,
          color: '#ffa6a6'
        },
        {
          x: 1540742400000,
          y: 4122328,
          color: '#ffa6a6'
        },
        {
          x: 1540828800000,
          y: 2760794,
          color: '#ffa6a6'
        },
        {
          x: 1540915200000,
          y: 3308274,
          color: '#a6d3a6'
        },
        {
          x: 1541001600000,
          y: 3735299,
          color: '#ffa6a6'
        },
        {
          x: 1541088000000,
          y: 2892863,
          color: '#a6d3a6'
        },
        {
          x: 1541347200000,
          y: 2432286,
          color: '#a6d3a6'
        },
        {
          x: 1541433600000,
          y: 4372044,
          color: '#ffa6a6'
        },
        {
          x: 1541520000000,
          y: 4349263,
          color: '#ffa6a6'
        },
        {
          x: 1541606400000,
          y: 3656786,
          color: '#a6d3a6'
        },
        {
          x: 1541692800000,
          y: 3249180,
          color: '#ffa6a6'
        },
        {
          x: 1541952000000,
          y: 4712069,
          color: '#ffa6a6'
        },
        {
          x: 1542038400000,
          y: 2586660,
          color: '#ffa6a6'
        },
        {
          x: 1542124800000,
          y: 5666425,
          color: '#ffa6a6'
        },
        {
          x: 1542211200000,
          y: 2916857,
          color: '#a6d3a6'
        },
        {
          x: 1542297600000,
          y: 3928141,
          color: '#a6d3a6'
        },
        {
          x: 1542556800000,
          y: 3024680,
          color: '#ffa6a6'
        },
        {
          x: 1542643200000,
          y: 3713294,
          color: '#ffa6a6'
        },
        {
          x: 1542729600000,
          y: 2517844,
          color: '#ffa6a6'
        }
      ],
      tooltip: {
        valueDecimals: 4
      },
      showInLegend: false,
      yAxis: 1
    },
    {
      type: 'line',
      lineWidth: 1,
      name: 'HH',
      linkedTo: 'primary',
      showInLegend: true,
      data: [
        {
          x: 1521648000000,
          y: 2803
        },
        {
          x: 1521734400000,
          y: 2827
        },
        {
          x: 1521993600000,
          y: 2827
        },
        {
          x: 1522080000000,
          y: 2827
        },
        {
          x: 1522166400000,
          y: 2827
        },
        {
          x: 1522252800000,
          y: 2827
        },
        {
          x: 1522339200000,
          y: 2827
        },
        {
          x: 1522598400000,
          y: 2827
        },
        {
          x: 1522684800000,
          y: 2827
        },
        {
          x: 1522771200000,
          y: 2827
        },
        {
          x: 1523203200000,
          y: 2827
        },
        {
          x: 1523289600000,
          y: 2827
        },
        {
          x: 1523376000000,
          y: 2827
        },
        {
          x: 1523462400000,
          y: 2827
        },
        {
          x: 1523548800000,
          y: 2827
        },
        {
          x: 1523808000000,
          y: 2827
        },
        {
          x: 1523894400000,
          y: 2827
        },
        {
          x: 1523980800000,
          y: 2827
        },
        {
          x: 1524067200000,
          y: 2827
        },
        {
          x: 1524153600000,
          y: 2827
        },
        {
          x: 1524412800000,
          y: 2827
        },
        {
          x: 1524499200000,
          y: 2820
        },
        {
          x: 1524585600000,
          y: 2771
        },
        {
          x: 1524672000000,
          y: 2768
        },
        {
          x: 1524758400000,
          y: 2768
        },
        {
          x: 1525190400000,
          y: 2768
        },
        {
          x: 1525276800000,
          y: 2768
        },
        {
          x: 1525363200000,
          y: 2768
        },
        {
          x: 1525622400000,
          y: 2768
        },
        {
          x: 1525708800000,
          y: 2778
        },
        {
          x: 1525795200000,
          y: 2778
        },
        {
          x: 1525881600000,
          y: 2787
        },
        {
          x: 1525968000000,
          y: 2795
        },
        {
          x: 1526227200000,
          y: 2798
        },
        {
          x: 1526313600000,
          y: 2816
        },
        {
          x: 1526400000000,
          y: 2817
        },
        {
          x: 1526486400000,
          y: 2888
        },
        {
          x: 1526572800000,
          y: 2888
        },
        {
          x: 1526832000000,
          y: 2888
        },
        {
          x: 1526918400000,
          y: 2888
        },
        {
          x: 1527004800000,
          y: 2888
        },
        {
          x: 1527091200000,
          y: 2888
        },
        {
          x: 1527177600000,
          y: 2888
        },
        {
          x: 1527436800000,
          y: 2888
        },
        {
          x: 1527523200000,
          y: 2888
        },
        {
          x: 1527609600000,
          y: 2888
        },
        {
          x: 1527696000000,
          y: 2888
        },
        {
          x: 1527782400000,
          y: 2888
        },
        {
          x: 1528041600000,
          y: 2888
        },
        {
          x: 1528128000000,
          y: 2888
        },
        {
          x: 1528214400000,
          y: 2888
        },
        {
          x: 1528300800000,
          y: 2888
        },
        {
          x: 1528387200000,
          y: 2888
        },
        {
          x: 1528646400000,
          y: 2888
        },
        {
          x: 1528732800000,
          y: 2888
        },
        {
          x: 1528819200000,
          y: 2888
        },
        {
          x: 1528905600000,
          y: 2861
        },
        {
          x: 1528992000000,
          y: 2855
        },
        {
          x: 1529337600000,
          y: 2855
        },
        {
          x: 1529424000000,
          y: 2855
        },
        {
          x: 1529510400000,
          y: 2855
        },
        {
          x: 1529596800000,
          y: 2855
        },
        {
          x: 1529856000000,
          y: 2855
        },
        {
          x: 1529942400000,
          y: 2855
        },
        {
          x: 1530028800000,
          y: 2855
        },
        {
          x: 1530115200000,
          y: 2855
        },
        {
          x: 1530201600000,
          y: 2855
        },
        {
          x: 1530460800000,
          y: 2855
        },
        {
          x: 1530547200000,
          y: 2867
        },
        {
          x: 1530633600000,
          y: 2867
        },
        {
          x: 1530720000000,
          y: 2894
        },
        {
          x: 1530806400000,
          y: 2902
        },
        {
          x: 1531065600000,
          y: 2917
        },
        {
          x: 1531152000000,
          y: 2917
        },
        {
          x: 1531238400000,
          y: 2926
        },
        {
          x: 1531324800000,
          y: 2930
        },
        {
          x: 1531411200000,
          y: 2930
        },
        {
          x: 1531670400000,
          y: 2936
        },
        {
          x: 1531756800000,
          y: 2936
        },
        {
          x: 1531843200000,
          y: 2936
        },
        {
          x: 1531929600000,
          y: 2936
        },
        {
          x: 1532016000000,
          y: 2936
        },
        {
          x: 1532275200000,
          y: 2936
        },
        {
          x: 1532361600000,
          y: 2940
        },
        {
          x: 1532448000000,
          y: 2982
        },
        {
          x: 1532534400000,
          y: 2982
        },
        {
          x: 1532620800000,
          y: 2982
        },
        {
          x: 1532880000000,
          y: 2982
        },
        {
          x: 1532966400000,
          y: 2992
        },
        {
          x: 1533052800000,
          y: 2992
        },
        {
          x: 1533139200000,
          y: 2992
        },
        {
          x: 1533225600000,
          y: 3020
        },
        {
          x: 1533484800000,
          y: 3121
        },
        {
          x: 1533571200000,
          y: 3294
        },
        {
          x: 1533657600000,
          y: 3294
        },
        {
          x: 1533744000000,
          y: 3294
        },
        {
          x: 1533830400000,
          y: 3329
        },
        {
          x: 1534089600000,
          y: 3329
        },
        {
          x: 1534176000000,
          y: 3329
        },
        {
          x: 1534262400000,
          y: 3407
        },
        {
          x: 1534348800000,
          y: 3407
        },
        {
          x: 1534435200000,
          y: 3407
        },
        {
          x: 1534694400000,
          y: 3407
        },
        {
          x: 1534780800000,
          y: 3428
        },
        {
          x: 1534867200000,
          y: 3428
        },
        {
          x: 1534953600000,
          y: 3520
        },
        {
          x: 1535040000000,
          y: 3520
        },
        {
          x: 1535299200000,
          y: 3520
        },
        {
          x: 1535385600000,
          y: 3520
        },
        {
          x: 1535472000000,
          y: 3520
        },
        {
          x: 1535558400000,
          y: 3520
        },
        {
          x: 1535644800000,
          y: 3520
        },
        {
          x: 1535904000000,
          y: 3520
        },
        {
          x: 1535990400000,
          y: 3520
        },
        {
          x: 1536076800000,
          y: 3520
        },
        {
          x: 1536163200000,
          y: 3520
        },
        {
          x: 1536249600000,
          y: 3520
        },
        {
          x: 1536508800000,
          y: 3520
        },
        {
          x: 1536595200000,
          y: 3520
        },
        {
          x: 1536681600000,
          y: 3520
        },
        {
          x: 1536768000000,
          y: 3520
        },
        {
          x: 1536854400000,
          y: 3520
        },
        {
          x: 1537113600000,
          y: 3520
        },
        {
          x: 1537200000000,
          y: 3520
        },
        {
          x: 1537286400000,
          y: 3520
        },
        {
          x: 1537372800000,
          y: 3445
        },
        {
          x: 1537459200000,
          y: 3408
        },
        {
          x: 1537804800000,
          y: 3408
        },
        {
          x: 1537891200000,
          y: 3408
        },
        {
          x: 1537977600000,
          y: 3408
        },
        {
          x: 1538064000000,
          y: 3408
        },
        {
          x: 1538928000000,
          y: 3408
        },
        {
          x: 1539014400000,
          y: 3408
        },
        {
          x: 1539100800000,
          y: 3422
        },
        {
          x: 1539187200000,
          y: 3468
        },
        {
          x: 1539273600000,
          y: 3468
        },
        {
          x: 1539532800000,
          y: 3507
        },
        {
          x: 1539619200000,
          y: 3525
        },
        {
          x: 1539705600000,
          y: 3525
        },
        {
          x: 1539792000000,
          y: 3525
        },
        {
          x: 1539878400000,
          y: 3525
        },
        {
          x: 1540137600000,
          y: 3525
        },
        {
          x: 1540224000000,
          y: 3525
        },
        {
          x: 1540310400000,
          y: 3525
        },
        {
          x: 1540396800000,
          y: 3525
        },
        {
          x: 1540483200000,
          y: 3525
        },
        {
          x: 1540742400000,
          y: 3525
        },
        {
          x: 1540828800000,
          y: 3525
        },
        {
          x: 1540915200000,
          y: 3525
        },
        {
          x: 1541001600000,
          y: 3525
        },
        {
          x: 1541088000000,
          y: 3525
        },
        {
          x: 1541347200000,
          y: 3525
        },
        {
          x: 1541433600000,
          y: 3525
        },
        {
          x: 1541520000000,
          y: 3525
        },
        {
          x: 1541606400000,
          y: 3525
        },
        {
          x: 1541692800000,
          y: 3525
        },
        {
          x: 1541952000000,
          y: 3525
        },
        {
          x: 1542038400000,
          y: 3465
        },
        {
          x: 1542124800000,
          y: 3407
        },
        {
          x: 1542211200000,
          y: 3398
        },
        {
          x: 1542297600000,
          y: 3398
        },
        {
          x: 1542556800000,
          y: 3381
        },
        {
          x: 1542643200000,
          y: 3381
        },
        {
          x: 1542729600000,
          y: 3381
        }
      ],
      tooltip: {
        valueDecimals: 6
      },
      yAxis: 0
    },
    {
      type: 'line',
      lineWidth: 1,
      name: 'LL',
      linkedTo: 'primary',
      showInLegend: true,
      data: [
        {
          x: 1521648000000,
          y: 2625
        },
        {
          x: 1521734400000,
          y: 2625
        },
        {
          x: 1521993600000,
          y: 2625
        },
        {
          x: 1522080000000,
          y: 2625
        },
        {
          x: 1522166400000,
          y: 2625
        },
        {
          x: 1522252800000,
          y: 2625
        },
        {
          x: 1522339200000,
          y: 2638
        },
        {
          x: 1522598400000,
          y: 2638
        },
        {
          x: 1522684800000,
          y: 2638
        },
        {
          x: 1522771200000,
          y: 2638
        },
        {
          x: 1523203200000,
          y: 2633
        },
        {
          x: 1523289600000,
          y: 2633
        },
        {
          x: 1523376000000,
          y: 2633
        },
        {
          x: 1523462400000,
          y: 2633
        },
        {
          x: 1523548800000,
          y: 2587
        },
        {
          x: 1523808000000,
          y: 2587
        },
        {
          x: 1523894400000,
          y: 2587
        },
        {
          x: 1523980800000,
          y: 2587
        },
        {
          x: 1524067200000,
          y: 2587
        },
        {
          x: 1524153600000,
          y: 2587
        },
        {
          x: 1524412800000,
          y: 2587
        },
        {
          x: 1524499200000,
          y: 2587
        },
        {
          x: 1524585600000,
          y: 2587
        },
        {
          x: 1524672000000,
          y: 2587
        },
        {
          x: 1524758400000,
          y: 2587
        },
        {
          x: 1525190400000,
          y: 2587
        },
        {
          x: 1525276800000,
          y: 2587
        },
        {
          x: 1525363200000,
          y: 2587
        },
        {
          x: 1525622400000,
          y: 2587
        },
        {
          x: 1525708800000,
          y: 2587
        },
        {
          x: 1525795200000,
          y: 2587
        },
        {
          x: 1525881600000,
          y: 2587
        },
        {
          x: 1525968000000,
          y: 2587
        },
        {
          x: 1526227200000,
          y: 2587
        },
        {
          x: 1526313600000,
          y: 2621
        },
        {
          x: 1526400000000,
          y: 2636
        },
        {
          x: 1526486400000,
          y: 2636
        },
        {
          x: 1526572800000,
          y: 2636
        },
        {
          x: 1526832000000,
          y: 2636
        },
        {
          x: 1526918400000,
          y: 2636
        },
        {
          x: 1527004800000,
          y: 2636
        },
        {
          x: 1527091200000,
          y: 2658
        },
        {
          x: 1527177600000,
          y: 2658
        },
        {
          x: 1527436800000,
          y: 2658
        },
        {
          x: 1527523200000,
          y: 2658
        },
        {
          x: 1527609600000,
          y: 2670
        },
        {
          x: 1527696000000,
          y: 2689
        },
        {
          x: 1527782400000,
          y: 2700
        },
        {
          x: 1528041600000,
          y: 2712
        },
        {
          x: 1528128000000,
          y: 2712
        },
        {
          x: 1528214400000,
          y: 2712
        },
        {
          x: 1528300800000,
          y: 2712
        },
        {
          x: 1528387200000,
          y: 2712
        },
        {
          x: 1528646400000,
          y: 2712
        },
        {
          x: 1528732800000,
          y: 2712
        },
        {
          x: 1528819200000,
          y: 2712
        },
        {
          x: 1528905600000,
          y: 2712
        },
        {
          x: 1528992000000,
          y: 2712
        },
        {
          x: 1529337600000,
          y: 2712
        },
        {
          x: 1529424000000,
          y: 2712
        },
        {
          x: 1529510400000,
          y: 2712
        },
        {
          x: 1529596800000,
          y: 2712
        },
        {
          x: 1529856000000,
          y: 2712
        },
        {
          x: 1529942400000,
          y: 2712
        },
        {
          x: 1530028800000,
          y: 2688
        },
        {
          x: 1530115200000,
          y: 2688
        },
        {
          x: 1530201600000,
          y: 2688
        },
        {
          x: 1530460800000,
          y: 2688
        },
        {
          x: 1530547200000,
          y: 2688
        },
        {
          x: 1530633600000,
          y: 2688
        },
        {
          x: 1530720000000,
          y: 2688
        },
        {
          x: 1530806400000,
          y: 2688
        },
        {
          x: 1531065600000,
          y: 2688
        },
        {
          x: 1531152000000,
          y: 2688
        },
        {
          x: 1531238400000,
          y: 2688
        },
        {
          x: 1531324800000,
          y: 2688
        },
        {
          x: 1531411200000,
          y: 2688
        },
        {
          x: 1531670400000,
          y: 2688
        },
        {
          x: 1531756800000,
          y: 2688
        },
        {
          x: 1531843200000,
          y: 2688
        },
        {
          x: 1531929600000,
          y: 2688
        },
        {
          x: 1532016000000,
          y: 2688
        },
        {
          x: 1532275200000,
          y: 2688
        },
        {
          x: 1532361600000,
          y: 2688
        },
        {
          x: 1532448000000,
          y: 2731
        },
        {
          x: 1532534400000,
          y: 2755
        },
        {
          x: 1532620800000,
          y: 2787
        },
        {
          x: 1532880000000,
          y: 2810
        },
        {
          x: 1532966400000,
          y: 2813
        },
        {
          x: 1533052800000,
          y: 2813
        },
        {
          x: 1533139200000,
          y: 2842
        },
        {
          x: 1533225600000,
          y: 2842
        },
        {
          x: 1533484800000,
          y: 2842
        },
        {
          x: 1533571200000,
          y: 2842
        },
        {
          x: 1533657600000,
          y: 2842
        },
        {
          x: 1533744000000,
          y: 2842
        },
        {
          x: 1533830400000,
          y: 2842
        },
        {
          x: 1534089600000,
          y: 2842
        },
        {
          x: 1534176000000,
          y: 2842
        },
        {
          x: 1534262400000,
          y: 2853
        },
        {
          x: 1534348800000,
          y: 2872
        },
        {
          x: 1534435200000,
          y: 2875
        },
        {
          x: 1534694400000,
          y: 2891
        },
        {
          x: 1534780800000,
          y: 2891
        },
        {
          x: 1534867200000,
          y: 2891
        },
        {
          x: 1534953600000,
          y: 2891
        },
        {
          x: 1535040000000,
          y: 2907
        },
        {
          x: 1535299200000,
          y: 2920
        },
        {
          x: 1535385600000,
          y: 2927
        },
        {
          x: 1535472000000,
          y: 2927
        },
        {
          x: 1535558400000,
          y: 2932
        },
        {
          x: 1535644800000,
          y: 3005
        },
        {
          x: 1535904000000,
          y: 3153
        },
        {
          x: 1535990400000,
          y: 3153
        },
        {
          x: 1536076800000,
          y: 3153
        },
        {
          x: 1536163200000,
          y: 3166
        },
        {
          x: 1536249600000,
          y: 3166
        },
        {
          x: 1536508800000,
          y: 3166
        },
        {
          x: 1536595200000,
          y: 3166
        },
        {
          x: 1536681600000,
          y: 3166
        },
        {
          x: 1536768000000,
          y: 3166
        },
        {
          x: 1536854400000,
          y: 3166
        },
        {
          x: 1537113600000,
          y: 3166
        },
        {
          x: 1537200000000,
          y: 3166
        },
        {
          x: 1537286400000,
          y: 3166
        },
        {
          x: 1537372800000,
          y: 3166
        },
        {
          x: 1537459200000,
          y: 3166
        },
        {
          x: 1537804800000,
          y: 3166
        },
        {
          x: 1537891200000,
          y: 3166
        },
        {
          x: 1537977600000,
          y: 3166
        },
        {
          x: 1538064000000,
          y: 3166
        },
        {
          x: 1538928000000,
          y: 3166
        },
        {
          x: 1539014400000,
          y: 3166
        },
        {
          x: 1539100800000,
          y: 3192
        },
        {
          x: 1539187200000,
          y: 3192
        },
        {
          x: 1539273600000,
          y: 3192
        },
        {
          x: 1539532800000,
          y: 3192
        },
        {
          x: 1539619200000,
          y: 3192
        },
        {
          x: 1539705600000,
          y: 3192
        },
        {
          x: 1539792000000,
          y: 3192
        },
        {
          x: 1539878400000,
          y: 3192
        },
        {
          x: 1540137600000,
          y: 3192
        },
        {
          x: 1540224000000,
          y: 3192
        },
        {
          x: 1540310400000,
          y: 3192
        },
        {
          x: 1540396800000,
          y: 3192
        },
        {
          x: 1540483200000,
          y: 3192
        },
        {
          x: 1540742400000,
          y: 3192
        },
        {
          x: 1540828800000,
          y: 3072
        },
        {
          x: 1540915200000,
          y: 3010
        },
        {
          x: 1541001600000,
          y: 2966
        },
        {
          x: 1541088000000,
          y: 2905
        },
        {
          x: 1541347200000,
          y: 2905
        },
        {
          x: 1541433600000,
          y: 2905
        },
        {
          x: 1541520000000,
          y: 2872
        },
        {
          x: 1541606400000,
          y: 2802
        },
        {
          x: 1541692800000,
          y: 2802
        },
        {
          x: 1541952000000,
          y: 2802
        },
        {
          x: 1542038400000,
          y: 2766
        },
        {
          x: 1542124800000,
          y: 2766
        },
        {
          x: 1542211200000,
          y: 2673
        },
        {
          x: 1542297600000,
          y: 2673
        },
        {
          x: 1542556800000,
          y: 2673
        },
        {
          x: 1542643200000,
          y: 2673
        },
        {
          x: 1542729600000,
          y: 2659
        }
      ],
      tooltip: {
        valueDecimals: 6
      },
      yAxis: 0
    },
    {
      type: 'line',
      lineWidth: 1,
      name: 'ATR',
      linkedTo: 'primary',
      showInLegend: true,
      data: [
        {
          x: 1522339200000,
          y: 52.5
        },
        {
          x: 1522598400000,
          y: 53.5
        },
        {
          x: 1522684800000,
          y: 52.7692
        },
        {
          x: 1522771200000,
          y: 52.9615
        },
        {
          x: 1523203200000,
          y: 56.1538
        },
        {
          x: 1523289600000,
          y: 55
        },
        {
          x: 1523376000000,
          y: 55.3077
        },
        {
          x: 1523462400000,
          y: 59.3077
        },
        {
          x: 1523548800000,
          y: 59.6923
        },
        {
          x: 1523808000000,
          y: 59.3462
        },
        {
          x: 1523894400000,
          y: 58.3462
        },
        {
          x: 1523980800000,
          y: 57.6538
        },
        {
          x: 1524067200000,
          y: 57.1923
        },
        {
          x: 1524153600000,
          y: 59.1154
        },
        {
          x: 1524412800000,
          y: 59.6538
        },
        {
          x: 1524499200000,
          y: 60.6538
        },
        {
          x: 1524585600000,
          y: 61.2308
        },
        {
          x: 1524672000000,
          y: 58.8077
        },
        {
          x: 1524758400000,
          y: 58.7308
        },
        {
          x: 1525190400000,
          y: 59.1538
        },
        {
          x: 1525276800000,
          y: 58.1923
        },
        {
          x: 1525363200000,
          y: 55.1538
        },
        {
          x: 1525622400000,
          y: 53.5
        },
        {
          x: 1525708800000,
          y: 52.6154
        },
        {
          x: 1525795200000,
          y: 53.6154
        },
        {
          x: 1525881600000,
          y: 52.6923
        },
        {
          x: 1525968000000,
          y: 52.6538
        },
        {
          x: 1526227200000,
          y: 51.9615
        },
        {
          x: 1526313600000,
          y: 51.4615
        },
        {
          x: 1526400000000,
          y: 52.8462
        },
        {
          x: 1526486400000,
          y: 49.9231
        },
        {
          x: 1526572800000,
          y: 50.1923
        },
        {
          x: 1526832000000,
          y: 49.2308
        },
        {
          x: 1526918400000,
          y: 46.3846
        },
        {
          x: 1527004800000,
          y: 45.9231
        },
        {
          x: 1527091200000,
          y: 45.7308
        },
        {
          x: 1527177600000,
          y: 47.3462
        },
        {
          x: 1527436800000,
          y: 46.2308
        },
        {
          x: 1527523200000,
          y: 45.5
        },
        {
          x: 1527609600000,
          y: 44.3077
        },
        {
          x: 1527696000000,
          y: 44.5385
        },
        {
          x: 1527782400000,
          y: 44.1154
        },
        {
          x: 1528041600000,
          y: 43.3846
        },
        {
          x: 1528128000000,
          y: 43.8846
        },
        {
          x: 1528214400000,
          y: 43.6923
        },
        {
          x: 1528300800000,
          y: 44.8077
        },
        {
          x: 1528387200000,
          y: 44.6923
        },
        {
          x: 1528646400000,
          y: 44.2692
        },
        {
          x: 1528732800000,
          y: 44.3846
        },
        {
          x: 1528819200000,
          y: 44.5769
        },
        {
          x: 1528905600000,
          y: 43.8077
        },
        {
          x: 1528992000000,
          y: 43.9231
        },
        {
          x: 1529337600000,
          y: 44.7308
        },
        {
          x: 1529424000000,
          y: 44.3846
        },
        {
          x: 1529510400000,
          y: 44.6538
        },
        {
          x: 1529596800000,
          y: 42.6923
        },
        {
          x: 1529856000000,
          y: 42.7692
        },
        {
          x: 1529942400000,
          y: 43.6154
        },
        {
          x: 1530028800000,
          y: 43.5769
        },
        {
          x: 1530115200000,
          y: 43.1538
        },
        {
          x: 1530201600000,
          y: 44.0385
        },
        {
          x: 1530460800000,
          y: 45.0385
        },
        {
          x: 1530547200000,
          y: 43.0385
        },
        {
          x: 1530633600000,
          y: 45.1538
        },
        {
          x: 1530720000000,
          y: 46.0769
        },
        {
          x: 1530806400000,
          y: 46.2692
        },
        {
          x: 1531065600000,
          y: 45.2308
        },
        {
          x: 1531152000000,
          y: 44.9231
        },
        {
          x: 1531238400000,
          y: 45.1923
        },
        {
          x: 1531324800000,
          y: 45.6538
        },
        {
          x: 1531411200000,
          y: 47.0385
        },
        {
          x: 1531670400000,
          y: 45.3077
        },
        {
          x: 1531756800000,
          y: 45.5
        },
        {
          x: 1531843200000,
          y: 44.1923
        },
        {
          x: 1531929600000,
          y: 44.3846
        },
        {
          x: 1532016000000,
          y: 45.1154
        },
        {
          x: 1532275200000,
          y: 44.8846
        },
        {
          x: 1532361600000,
          y: 46
        },
        {
          x: 1532448000000,
          y: 45.1923
        },
        {
          x: 1532534400000,
          y: 44.9615
        },
        {
          x: 1532620800000,
          y: 43.8462
        },
        {
          x: 1532880000000,
          y: 45.4615
        },
        {
          x: 1532966400000,
          y: 45.6538
        },
        {
          x: 1533052800000,
          y: 45.5769
        },
        {
          x: 1533139200000,
          y: 47.8846
        },
        {
          x: 1533225600000,
          y: 50.1538
        },
        {
          x: 1533484800000,
          y: 54.6923
        },
        {
          x: 1533571200000,
          y: 55.2308
        },
        {
          x: 1533657600000,
          y: 57.8077
        },
        {
          x: 1533744000000,
          y: 59.9231
        },
        {
          x: 1533830400000,
          y: 62.0769
        },
        {
          x: 1534089600000,
          y: 62.1923
        },
        {
          x: 1534176000000,
          y: 67.1923
        },
        {
          x: 1534262400000,
          y: 68.1538
        },
        {
          x: 1534348800000,
          y: 72.6154
        },
        {
          x: 1534435200000,
          y: 74.5385
        },
        {
          x: 1534694400000,
          y: 80.5385
        },
        {
          x: 1534780800000,
          y: 82.7692
        },
        {
          x: 1534867200000,
          y: 89.4231
        },
        {
          x: 1534953600000,
          y: 94.1154
        },
        {
          x: 1535040000000,
          y: 94.3077
        },
        {
          x: 1535299200000,
          y: 95.1923
        },
        {
          x: 1535385600000,
          y: 97.7308
        },
        {
          x: 1535472000000,
          y: 99.0385
        },
        {
          x: 1535558400000,
          y: 99.8462
        },
        {
          x: 1535644800000,
          y: 101.2692
        },
        {
          x: 1535904000000,
          y: 104.2692
        },
        {
          x: 1535990400000,
          y: 103.8077
        },
        {
          x: 1536076800000,
          y: 105.1538
        },
        {
          x: 1536163200000,
          y: 104.3077
        },
        {
          x: 1536249600000,
          y: 104.9231
        },
        {
          x: 1536508800000,
          y: 103.1154
        },
        {
          x: 1536595200000,
          y: 99.1538
        },
        {
          x: 1536681600000,
          y: 101.6923
        },
        {
          x: 1536768000000,
          y: 100.1923
        },
        {
          x: 1536854400000,
          y: 96.6154
        },
        {
          x: 1537113600000,
          y: 95.5385
        },
        {
          x: 1537200000000,
          y: 95.5
        },
        {
          x: 1537286400000,
          y: 92.9231
        },
        {
          x: 1537372800000,
          y: 91.3846
        },
        {
          x: 1537459200000,
          y: 87
        },
        {
          x: 1537804800000,
          y: 85.3077
        },
        {
          x: 1537891200000,
          y: 80.6154
        },
        {
          x: 1537977600000,
          y: 78.9615
        },
        {
          x: 1538064000000,
          y: 73.8462
        },
        {
          x: 1538928000000,
          y: 72.6154
        },
        {
          x: 1539014400000,
          y: 74.7308
        },
        {
          x: 1539100800000,
          y: 73.8846
        },
        {
          x: 1539187200000,
          y: 73.5385
        },
        {
          x: 1539273600000,
          y: 74.7308
        },
        {
          x: 1539532800000,
          y: 74.7308
        },
        {
          x: 1539619200000,
          y: 76.9615
        },
        {
          x: 1539705600000,
          y: 74.6923
        },
        {
          x: 1539792000000,
          y: 74.7692
        },
        {
          x: 1539878400000,
          y: 74
        },
        {
          x: 1540137600000,
          y: 75
        },
        {
          x: 1540224000000,
          y: 72.3462
        },
        {
          x: 1540310400000,
          y: 72.8077
        },
        {
          x: 1540396800000,
          y: 75.7308
        },
        {
          x: 1540483200000,
          y: 72.3462
        },
        {
          x: 1540742400000,
          y: 76.9615
        },
        {
          x: 1540828800000,
          y: 78.0769
        },
        {
          x: 1540915200000,
          y: 77.7692
        },
        {
          x: 1541001600000,
          y: 80.5769
        },
        {
          x: 1541088000000,
          y: 79.0769
        },
        {
          x: 1541347200000,
          y: 79.9615
        },
        {
          x: 1541433600000,
          y: 82.9615
        },
        {
          x: 1541520000000,
          y: 84.6538
        },
        {
          x: 1541606400000,
          y: 83.4615
        },
        {
          x: 1541692800000,
          y: 83.6154
        },
        {
          x: 1541952000000,
          y: 84.5385
        },
        {
          x: 1542038400000,
          y: 81.8846
        },
        {
          x: 1542124800000,
          y: 83.9231
        },
        {
          x: 1542211200000,
          y: 83.1154
        },
        {
          x: 1542297600000,
          y: 82.9615
        },
        {
          x: 1542556800000,
          y: 81.0769
        },
        {
          x: 1542643200000,
          y: 81.2308
        },
        {
          x: 1542729600000,
          y: 80.8462
        }
      ],
      tooltip: {
        valueDecimals: 6
      },
      yAxis: 3
    }
  ],
  exporting: {
    buttons: {
      hideButton: {
        _titleKey: '_fullscreen',
        text: '全屏'
      }
    }
  }
}

let highStockData = new HighStockData(high_chart_option)

var kline = new Kline({
  element: '#kline_container',
  width: 1200,
  height: 650,
  theme: 'dark', // light/dark
  language: 'zh-cn', // zh-cn/en-us/zh-tw
  ranges: ['1w', '1d', '1h', '30m', '15m', '5m', '1m', 'line'],
  symbol: 'BTC',
  symbolName: 'BTC/USD',
  type: 'other', // poll/socket
  //url: '/mock.json',
  limit: 1000,
  intervalTime: 5000,
  debug: true,
  showTrade: true,
  highStockData: highStockData,
  onResize: function(width, height) {
    console.log('chart resized: ' + width + ' ' + height)
  }
})

kline.draw()

// $('#resize-btn').click(function() {
//   var height = $('#height').val()
//   var width = $('#width').val()
//   kline.resize(width, height)
// })

// $('#switch-trade-btn').click(function() {
//   kline.toggleTrade()
// })

// $('#set-symbol-btn').click(function() {
//   var symbol = $('#symbol').val()
//   var symbolName = $('#symbol-name').val()
//   kline.setSymbol(symbol, symbolName)
// })

// $('#toggle-theme-btn').click(function() {
//   if (kline.theme == 'dark') {
//     kline.setTheme('light')
//   } else {
//     kline.setTheme('dark')
//   }
// })

// $('#set-lang-btn').click(function() {
//   var lang = $('#lang-select').val()
//   kline.setLanguage(lang)
// })
