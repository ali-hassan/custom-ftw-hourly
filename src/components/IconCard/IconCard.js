import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import css from './IconCard.css';

const BRAND_AMEX = 'amex';
const BRAND_DINERS = 'diners';
const BRAND_DISCOVERY = 'discovery';
const BRAND_JCB = 'jcb';
const BRAND_MASTERCARD = 'mastercard';
const BRAND_UNIONPAY = 'unionpay';
const BRAND_VISA = 'visa';

const IconCard = props => {
  const { className, rootClassName, brand } = props;
  const classes = classNames(rootClassName || css.root, className);

  switch (brand) {
    case BRAND_AMEX:
      return (
        <svg
          className={classes}
          height="16"
          viewBox="0 0 24 16"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <rect fill="#016fd0" height="16" rx="2" width="24" />
            <path
              d="M13.764 13.3939V7.6925l10.1476.009v1.575l-1.1729 1.2534 1.1729 1.2648v1.6083H22.039l-.9952-1.0981-.9881 1.1023z"
              fill="#fffffe"
            />
            <path
              d="M14.4418 12.7688V8.3199h3.7723v1.0249h-2.5509v.6957h2.49v1.0078h-2.49v.6833h2.5509v1.0372z"
              fill="#016fd0"
            />
            <path
              d="M18.1953 12.7688l2.0873-2.227L18.1952 8.32h1.6156l1.2755 1.41 1.2791-1.41h1.5462v.035l-2.0429 2.1868 2.0429 2.1639v.0631h-1.5617l-1.2981-1.4242-1.2848 1.4242z"
              fill="#016fd0"
            />
            <path
              d="M14.2373 2.632h2.4461l.8591 1.9508V2.632h3.0199l.5207 1.4615.5226-1.4615h2.3059v5.7013H11.7251z"
              fill="#fffffe"
            />
            <g fill="#016fd0">
              <path d="M14.7005 3.2514l-1.974 4.4451h1.3539l.3724-.8901h2.018l.372.8901h1.3877l-1.9658-4.4451zm.1696 2.5574l.592-1.415.5916 1.415z" />
              <path d="M18.212 7.6957v-4.445l1.903.0065.9794 2.7327.9856-2.7392h1.8316v4.445l-1.1786.0105V4.6528l-1.1126 3.043h-1.0758L19.409 4.6423v3.0533z" />
            </g>
          </g>
        </svg>
      );
    case BRAND_DINERS:
      return (
        <svg
          className={classes}
          width="24"
          height="16"
          viewBox="0 0 24 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fillRule="nonzero" fill="none">
            <path
              d="M21.9972 15.75h.0022c.955.0081 1.7387-.7727 1.7506-1.7458V2.0063c-.0038-.4706-.1911-.9201-.5203-1.2495a1.7197 1.7197 0 0 0-1.2325-.5067H2.0006C1.5411.246 1.0986.4283.7703.7568.441 1.0862.2538 1.5357.25 2.0043v11.9894c.0038.4706.1911.9201.5203 1.2495a1.7197 1.7197 0 0 0 1.2325.5067h19.9944zm-.001.5h-.0011.0021-.001z"
              strokeOpacity=".2"
              stroke="#000"
              strokeWidth=".5"
              fill="#FFF"
            />
            <path
              d="M10.0021 2.0518v-.016h4v.016c3.1354.2294 5.5621 2.8402 5.5621 5.984s-2.4267 5.7546-5.562 5.984v.016h-4v-.016C6.8666 13.7904 4.44 11.1796 4.44 8.0358s2.4267-5.7546 5.5621-5.984z"
              fill="#0165AC"
            />
            <path
              d="M11.6021 11.4278a3.6 3.6 0 0 0 0-6.784v6.784zm-2.4-6.784a3.6 3.6 0 0 0 0 6.784v-6.784zm1.2 8.592c-2.8719 0-5.2-2.3281-5.2-5.2s2.3281-5.2 5.2-5.2 5.2 2.3281 5.2 5.2-2.3281 5.2-5.2 5.2z"
              fill="#FFF"
            />
          </g>
        </svg>
      );
    case BRAND_DISCOVERY:
      return (
        <svg
          className={classes}
          width="24"
          height="16"
          viewBox="0 0 24 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fillRule="nonzero" fill="none">
            <path
              d="M21.9972 15.75h.0022c.955.0081 1.7387-.7727 1.7506-1.7458V2.0063c-.0038-.4706-.1911-.9201-.5203-1.2495a1.7197 1.7197 0 0 0-1.2325-.5067H2.0006C1.5411.246 1.0986.4283.7703.7568.441 1.0862.2538 1.5357.25 2.0043v11.9894c.0038.4706.1911.9201.5203 1.2495a1.7197 1.7197 0 0 0 1.2325.5067h19.9944zm-.001.5h-.0011.0021-.001z"
              strokeOpacity=".2"
              stroke="#000"
              strokeWidth=".5"
              fill="#FFF"
            />
            <path
              d="M12.6124 16h9.3848A1.9862 1.9862 0 0 0 24 14.0302v-2.3586a38.7393 38.7393 0 0 1-11.3876 4.3282z"
              fill="#F27712"
            />
            <path
              d="M23.1724 9.2965H22.32l-.96-1.2662h-.091v1.2662h-.6952V6.1517H21.6c.8028 0 1.2662.331 1.2662.9268 0 .4883-.2896.8028-.811.9021l1.1172 1.3159zm-1.0262-2.1931c0-.3062-.2317-.4635-.662-.4635h-.2152v.9518h.1986c.4469 0 .6786-.1656.6786-.4883zm-4.0055-.9517h1.9696v.5296H18.836v.7035h1.2248v.5379h-1.2248v.8524h1.2744v.5297h-1.9696V6.1517zm-2.2345 3.2275L14.4 6.1434h.7614l.9517 2.1186.96-2.1186h.7448l-1.5227 3.2358h-.389zm-6.298-.0082c-1.0592 0-1.8868-.72-1.8868-1.6552 0-.9104.8441-1.647 1.9034-1.647.298 0 .5462.058.8524.1904v.7283a1.2414 1.2414 0 0 0-.869-.3558c-.662 0-1.1668.48-1.1668 1.084 0 .6373.4965 1.0925 1.2 1.0925.3145 0 .5545-.0993.8358-.3476v.7283c-.3144.1324-.5793.182-.869.182zm-2.102-1.0345c0 .6124-.5048 1.0345-1.2331 1.0345-.5297 0-.9103-.1821-1.2331-.5959l.4552-.389c.1572.2814.422.4221.753.4221.3146 0 .538-.1903.538-.4386 0-.1407-.0662-.2483-.2069-.331a2.88 2.88 0 0 0-.48-.1821c-.6538-.207-.8772-.4304-.8772-.869 0-.513.48-.902 1.109-.902.3972 0 .753.124 1.051.3558l-.3642.4138a.7614.7614 0 0 0-.5627-.2483c-.298 0-.5131.149-.5131.3476 0 .1655.1241.2566.5379.3973.7945.2482 1.0262.48 1.0262.993v-.0082zm-3.418-2.1848h.6952v3.153h-.6951v-3.153zm-2.2344 3.153H.8276v-3.153h1.0262c1.1255 0 1.9034.6455 1.9034 1.5724 0 .4717-.2317.9186-.6372 1.2165-.3476.2483-.7366.3642-1.2745.3642h.0083zm.811-2.3668c-.2317-.1821-.4965-.2483-.9517-.2483h-.1903V8.775h.1903c.4469 0 .7283-.0828.9517-.2483.24-.1986.3807-.4965.3807-.8027 0-.3062-.1407-.5959-.3807-.7862z"
              fill="#000"
            />
            <path
              d="M12.4138 6.0689c-.9104 0-1.6552.7283-1.6552 1.6303 0 .96.7117 1.68 1.6552 1.68.9269 0 1.6552-.7282 1.6552-1.6551 0-.927-.72-1.6552-1.6552-1.6552z"
              fill="#F27712"
            />
          </g>
        </svg>
      );
    case BRAND_JCB:
      return (
        <svg
          className={classes}
          height="16"
          viewBox="0 0 23 16"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
            <path
              d="M.2054 16h4.5178c1.0278 0 2.259-1.1947 2.259-2.1333V0h-4.518C1.4366 0 .2055 1.1947.2055 3.2z"
              fill="#047ab1"
            />
            <path
              d="M2.7692 10.816a9.7709 9.7709 0 0 1-2.5638-.3413V9.3013c.6467.3777 1.386.5909 2.146.6187.8696 0 1.3553-.576 1.3553-1.3653V5.3333h2.146v3.2214c0 1.2586-.7003 2.2613-3.0835 2.2613z"
              fill="#fff"
            />
            <path
              d="M8.1116 16h4.5179c1.0278 0 2.2589-1.1947 2.2589-2.1333V0h-4.5179C9.3427 0 8.1116 1.1947 8.1116 3.2z"
              fill="#d42d06"
            />
            <path
              d="M8.1116 6.08c.6551-.5973 1.7846-.9707 3.6143-.8853.994.0426 2.033.32 2.033.32v1.184c-.5943-.3395-1.2623-.5474-1.954-.608C10.4158 5.9733 9.5687 6.7093 9.5687 8s.8471 2.0267 2.2364 1.92c.692-.066 1.3596-.2774 1.954-.6187v1.1734s-1.0392.288-2.0331.3306c-1.8297.0854-2.9592-.288-3.6143-.8853z"
              fill="#fff"
            />
            <path
              d="M16.0179 16h4.5178c1.0278 0 2.259-1.1947 2.259-2.1333V0h-4.518C17.249 0 16.018 1.1947 16.018 3.2z"
              fill="#67b637"
            />
            <path
              d="M21.6652 9.28c0 .8533-.7003 1.3867-1.6377 1.3867h-4.0096V5.3333h3.6481l.2598.0107c.8245.0427 1.4344.5013 1.4344 1.2907 0 .6186-.4179 1.152-1.1746 1.28v.032c.8358.0533 1.4796.5546 1.4796 1.3333zM18.785 6.176a1.0871 1.0871 0 0 0-.1468-.0107H17.283v1.344h1.5021c.2824-.064.5196-.3093.5196-.672 0-.3626-.2372-.608-.5196-.6613zm.1695 2.176a1.0276 1.0276 0 0 0-.1808-.0107H17.283v1.4614h1.4908l.1808-.0214c.2823-.064.5195-.3413.5195-.7146 0-.3734-.2259-.64-.5195-.7147z"
              fill="#fff"
            />
          </g>
        </svg>
      );
    case BRAND_MASTERCARD:
      return (
        <svg
          className={classes}
          height="16"
          viewBox="0 0 24 16"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <rect fill="#252525" height="16" rx="2" width="24" />
            <circle cx="9" cy="8" fill="#eb001b" r="5" />
            <circle cx="15" cy="8" fill="#f79e1b" r="5" />
            <path
              d="M12 3.9996c1.2144.9122 2 2.3646 2 4.0004s-.7856 3.0882-2 4.0004C10.7856 11.0882 10 9.6358 10 8s.7856-3.0882 2-4.0004z"
              fill="#ff5f00"
            />
          </g>
        </svg>
      );
    case BRAND_UNIONPAY:
      return (
        <svg
          className={classes}
          height="16"
          viewBox="0 0 24 16"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
            <path
              d="M4.5459 0h5.7938c.8087 0 1.3117.7257 1.123 1.619L8.7655 14.3675c-.1904.8902-1.0002 1.6165-1.8095 1.6165H1.1627c-.8076 0-1.3118-.7263-1.1231-1.6165L2.7381 1.619C2.9268.7257 3.7361 0 4.546 0"
              fill="#dd2423"
            />
            <path
              d="M9.8576 0h6.6627c.8086 0 .444.7257.2537 1.619l-2.697 12.7485c-.1892.8902-.1302 1.6165-.9405 1.6165H6.4738c-.8103 0-1.3118-.7263-1.1214-1.6165L8.0493 1.619C8.2408.7257 9.0483 0 9.8576 0"
              fill="#16315e"
            />
            <path
              d="M16.256 0h5.7938c.8098 0 1.3129.7257 1.1226 1.619l-2.697 12.7485c-.1903.8902-1.0006 1.6165-1.8104 1.6165h-5.791c-.8104 0-1.313-.7263-1.1232-1.6165L14.4482 1.619C14.637.7257 15.4457 0 16.256 0"
              fill="#036862"
            />
            <path
              d="M6.059 4.0856c-.5958.0067-.7717 0-.828-.0146-.0216.113-.4236 2.1546-.4247 2.1563-.0866.413-.1496.7075-.3635.8976-.1215.1105-.2633.1639-.4276.1639-.2643 0-.4182-.1445-.444-.4184l-.005-.094s.0805-.5533.0805-.5564c0 0 .422-1.8605.4975-2.1064a.1945.1945 0 0 0 .0061-.028c-.8213.008-.967 0-.977-.0146-.0055.02-.0258.1354-.0258.1354l-.4308 2.097-.037.1778-.0716.5817c0 .1725.0307.3134.092.4325.1963.3776.7563.4342 1.073.4342.4081 0 .791-.0955 1.0497-.2698.449-.292.5666-.7486.6713-1.1544l.0486-.2081s.4347-1.9323.5085-2.1837c.0029-.014.004-.0213.0078-.028zm1.479 1.5588c-.1048 0-.2963.028-.4683.1208-.0624.0353-.1215.076-.1838.1166l.0562-.2234-.0307-.0376c-.3648.0813-.4464.0922-.7834.1444l-.0282.0207c-.0391.357-.0739.6255-.219 1.3274a90.3116 90.3116 0 0 1-.17.778l.0156.0327c.3453-.02.45-.02.7502-.0146l.0242-.029c.0382-.215.0431-.2654.1276-.7009.0396-.2064.1224-.66.1632-.8215.075-.0383.149-.0759.2196-.0759.1682 0 .1477.1615.1412.2259-.0072.108-.0685.4609-.1313.7639l-.042.1955c-.0292.1445-.0612.2848-.0905.428l.0127.0286c.3404-.02.4442-.02.7348-.0146l.0342-.029c.0525-.3358.0679-.4257.1611-.9146l.0469-.2246c.091-.4397.1368-.6626.068-.8442-.073-.2035-.2478-.2526-.4083-.2526zm1.6521.4603c-.181.0383-.2963.0637-.411.0802-.1136.02-.2245.0383-.3993.065l-.0139.0138-.0127.011c-.0182.1434-.0309.2673-.055.413-.0205.1506-.052.3218-.1033.5677-.0397.1882-.0601.2538-.0827.32-.022.0663-.0463.1307-.091.3158l.0105.0171.0087.0157c.1634-.0085.2703-.0146.3802-.0157.1097-.0043.2234 0 .3994.001l.0154-.0137.0165-.0153c.0254-.167.0292-.2119.0447-.2933.0154-.0874.042-.2083.107-.5314.0309-.1517.0652-.303.0971-.4578.0332-.1542.068-.306.101-.4578l-.005-.0183zm.0039-.6206c-.1644-.1068-.453-.0729-.6471.0746-.1936.1446-.2157.3498-.0518.458.1615.1038.4512.0729.6436-.0759.1932-.1477.2174-.351.0553-.4567zm.994 2.4734c.3326 0 .6735-.101.9301-.4003.1974-.2428.288-.6041.3193-.7529.1021-.4931.0226-.7233-.0772-.8635-.1517-.2138-.4197-.2824-.6978-.2824-.1672 0-.5654.0182-.8765.334-.2234.2277-.3267.5368-.389.833-.0628.302-.135.8454.319 1.0477.14.0662.342.0844.4722.0844zm-.026-1.1095c.0768-.3734.1673-.6868.3983-.6868.181 0 .1942.2332.1137.6078-.0144.0832-.0805.3924-.1699.524-.0624.0972-.1363.1561-.2179.1561-.0243 0-.1688 0-.171-.2361-.0011-.1166.0205-.2357.0469-.365zm2.1068 1.0615l.026-.0291c.0368-.215.0429-.2655.1245-.7008.0408-.2065.1253-.66.165-.8216.075-.0384.1478-.076.2207-.076.167 0 .1467.1615.14.2259-.006.1082-.0673.4609-.1313.7639l-.0396.1955c-.0304.1446-.0635.2848-.0927.4282l.0127.0286c.3415-.02.4413-.02.7337-.0146l.0353-.0291c.0512-.336.065-.4258.161-.9146l.0458-.2247c.0916-.4397.1379-.6624.07-.844-.0749-.2035-.2509-.2526-.4092-.2526-.1049 0-.2974.0278-.4684.1208a3.0577 3.0577 0 0 0-.1826.1166l.0524-.2234-.028-.0378c-.3647.0814-.448.0923-.7846.1446l-.0258.0206c-.0408.3571-.074.6254-.219 1.3275a95.9633 95.9633 0 0 1-.17.7779l.0155.0328c.3458-.02.449-.02.7486-.0146zm2.5088.0145c.0215-.1154.149-.799.1501-.799 0 0 .1086-.5017.1152-.5199 0 0 .0342-.0522.0684-.0729h.0503c.4743 0 1.01 0 1.4298-.34.2857-.2332.481-.5775.5681-.996a1.6492 1.6492 0 0 0 .0393-.3466c0-.1603-.0292-.3189-.1137-.4428-.214-.3297-.6404-.3358-1.1326-.3383l-.2426.0025c-.63.0086-.8826.0061-.9864-.0079-.0088.0505-.0253.1404-.0253.1404s-.2256 1.1513-.2256 1.1531l-.5655 2.5632c.55-.0073.7756-.0073.8705.0042zm.4181-2.0452s.24-1.149.2388-1.1446l.0078-.059.0034-.0448.0959.0108s.4948.0468.5064.048c.1953.0832.2758.2976.2196.5774-.0513.2558-.202.4708-.3956.5746-.1594.088-.3547.0953-.556.0953h-.1301zm1.494.9905c-.0635.2975-.1364.841.3154 1.0347.144.0674.2731.0875.4043.0802.1385-.0082.2669-.0847.3858-.1948l-.0322.1359.0205.029c.325-.015.4258-.015.7778-.012l.032-.0268c.0513-.3327.0998-.6557.2334-1.2922.065-.3048.13-.6067.1968-.9103l-.0104-.0334c-.3635.0741-.4607.09-.8103.1445l-.0266.0238c-.0035.031-.0072.0607-.0106.0904-.0543-.0967-.1331-.1793-.2547-.2307-.1555-.0674-.5207.0194-.8346.334-.2206.2247-.3265.5325-.3867.8277zm.7633.0182c.0778-.3668.1672-.677.3988-.677.1465 0 .2236.1487.208.4024-.0125.0633-.026.13-.0419.2054-.0232.109-.0483.217-.0727.3252-.0249.074-.0538.1438-.0856.1903-.0596.093-.2014.1506-.283.1506-.0232 0-.166 0-.171-.232-.0011-.1154.0205-.2344.0474-.365zm3.9867-1.2109l-.0281-.0353c-.3597.0802-.4248.093-.7552.1421l-.0243.0267c-.0012.0044-.0021.011-.0038.0171l-.0012-.006c-.246.6248-.2388.49-.439.9818-.0011-.0224-.0011-.0363-.0023-.0601l-.0501-1.0663-.0315-.0353c-.3768.0802-.3857.093-.7336.1421l-.0271.0267c-.0039.0128-.0039.0268-.0061.042l.0022.0055c.0435.2446.033.19.0767.5762.0204.1895.0475.3801.0678.5673.0343.3132.0535.4674.0955.9455-.235.4268-.2907.5884-.5169.963l.0016.0037-.1593.2774c-.0182.0292-.0348.0492-.058.0578-.0253.0138-.0584.0163-.1043.0163h-.0882l-.1312.4804.45.0085c.2642-.0012.4303-.1372.5197-.32l.283-.5339h-.0045l.0298-.0376c.1904-.4511 1.6384-3.1856 1.6384-3.1856zm-4.7501 6.3088h-.191l.7067-2.573h.2344l.0745-.265.0072.2947c-.0088.1822.1214.3437.4634.317h.3956l.1361-.4954h-.1488c-.0856 0-.1253-.0238-.1203-.0748l-.0072-.2999h-.7325v.0016c-.2369.0054-.944.025-1.0873.067-.1732.049-.3558.1937-.3558.1937l.0717-.2654h-.6852l-.1428.5265-.716 2.6123h-.139l-.1363.4919h1.3647l-.0457.164h.6724l.0447-.164h.1886zm-.56-2.0502c-.1097.0334-.3139.1348-.3139.1348l.1816-.6576h.5444l-.1313.4791s-.1682.011-.2807.0437zm.0105.9394s-.171.0237-.2836.0516c-.1108.037-.3187.1536-.3187.1536l.1876-.6843h.5472zm-.305 1.1168h-.5461l.1583-.5775h.5444zm1.315-1.5959h.7872l-.113.4033h-.7977l-.1197.4408h.6979l-.5285.8191c-.037.0602-.0702.0815-.107.0984-.037.0207-.0856.045-.1418.045h-.1936l-.133.4828h.5064c.2632 0 .4187-.1318.5335-.3048l.3624-.546.0778.5544c.0165.1038.0843.1646.1302.1882.0507.028.103.076.177.0832.0794.0037.1368.0067.1749.0067h.2488l.1494-.5404h-.0981c-.0564 0-.1534-.0104-.1699-.0298-.0165-.0237-.0165-.06-.0254-.1154l-.079-.5556h-.3232l.1418-.1858h.796l.1225-.4408h-.737l.1148-.4033h.7347l.1363-.4973h-2.1906zm-6.6482 1.7082l.1837-.6728h.7551l.138-.5004h-.7558l.1153-.4141h.7386l.1369-.4846h-1.848l-.134.4846h.4198l-.112.414h-.421l-.1395.509h.4197l-.2449.8902c-.033.1178.0156.1627.0464.2175.0315.0533.0634.0886.1351.1086.074.0182.1247.0291.1936.0291h.8513l.1517-.5544-.3774.0571c-.0729 0-.2747-.0096-.2526-.0838zm.0866-3.2208l-.1914.3807c-.041.0831-.0778.1348-.111.1585-.0292.02-.0871.0285-.171.0285h-.0998l-.1335.487h.3316c.1594 0 .2819-.0643.3403-.0965.0629-.037.0794-.0159.128-.0675l.112-.1068h1.0354l.1374-.507h-.758l.1324-.277zm1.5286 3.2306c-.0177-.028-.005-.0773.022-.1799l.283-1.0311h1.0068c.1467-.0023.2526-.0042.3215-.0096.074-.0086.1545-.0377.2422-.0899.0905-.0547.1369-.1124.176-.1786.0436-.066.1137-.2107.1738-.4336l.3557-1.3049-1.0447.0067s-.3217.0522-.4633.11c-.143.0643-.3471.244-.3471.244l.0943-.3577h-.6454l-.9035 3.2986c-.032.128-.0535.221-.0585.2769-.0017.0601.069.1197.1147.1646.054.0449.134.0376.2107.0449.0806.0067.1953.0109.3536.0109h.496l.1522-.5659-.444.0462a.1138.1138 0 0 1-.096-.0516zm.4876-1.9074h1.0575l-.0673.2319c-.0094.0054-.032-.0115-.1396.0025h-.9157zm.2118-.778h1.0664l-.0767.2794s-.5026-.0054-.583.0109c-.3543.0675-.5611.2758-.5611.2758zm.8021 1.7866c-.0087.0347-.0226.0558-.042.0717-.0214.0152-.0561.0206-.108.0206h-.1506l.0089-.2824H12.7l-.0254 1.3809c-.001.0996.0078.1573.074.2035.0662.0576.2703.065.545.065h.3927l.1418-.517-.342.0207-.1136.0073c-.0155-.0073-.0304-.014-.0469-.0321-.0144-.0157-.0387-.0061-.0347-.1057l.0027-.354.3585-.0163c.1936 0 .2764-.0694.347-.1354.0674-.0633.0894-.136.1148-.2345l.0602-.3134h-.4927z"
              fill="#fefefe"
            />
          </g>
        </svg>
      );
    case BRAND_VISA:
      return (
        <svg
          className={classes}
          width="24"
          height="16"
          viewBox="0 0 24 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fillRule="nonzero" fill="none">
            <rect
              strokeOpacity=".2"
              stroke="#000"
              strokeWidth=".5"
              fill="#FFF"
              x=".25"
              y=".25"
              width="23.5"
              height="15.5"
              rx="2"
            />
            <path
              d="M2.78773262 5.91443732C2.26459089 5.62750595 1.6675389 5.39673777 1 5.23659312l.0280005-.12471102h2.73697872c.37098332.01300346.67201191.12462375.76996714.51882925l.59482061 2.83587917.18221641.85413565L6.97796639 5.1118821h1.79882257l-2.67390785 6.1656463H4.30396552l-1.5162329-5.36309108zm7.31224258 5.36963648H8.39882877l1.06401886-6.1721917H11.163901l-1.0639258 6.1721917zm6.1668069-6.02129922l-.2313529 1.3328108-.1538632-.06554092c-.3078194-.12479829-.7141522-.2495093-1.2671852-.2363313-.6716398 0-.9728545.26905813-.9798314.53174543 0 .28895604.3643786.47938251.9593659.76179318.9801104.43993579 1.4347231.97831385 1.4279323 1.68093694-.0137677 1.28044789-1.1758348 2.10786929-2.9607967 2.10786929-.7631763-.0066327-1.4982591-.1579615-1.8972429-.3284901l.2380507-1.38552277.224004.09861682c.5530331.23004776.9169465.32831555 1.5961213.32831555.4897761 0 1.0149017-.19060107 1.0215995-.60409358 0-.26923267-.2237249-.46637906-.8818761-.76842582-.6439184-.29558867-1.5048639-.78797464-1.4909101-1.67447884C11.8780532 5.84042483 13.0610509 5 14.7409877 5c.6580581 0 1.1902536.13788902 1.5257944.26277458zm2.2609703 3.83471102h1.4139786c-.0699548-.30859213-.3921-1.78601186-.3921-1.78601186l-.1188858-.5318327c-.0840015.22978594-.2308878.60409353-.2238179.59091553 0 0-.5390794 1.3723448-.6791749 1.72692903zm2.0998512-3.9856035L22 11.2839865h-1.5750977s-.1541422-.7091684-.2029803-.9258637h-2.1841317c-.0631639.1640705-.3570296.9258637-.3570296.9258637h-1.7849619l2.5268355-5.65999506c.1750729-.40057632.4833574-.51210934.889132-.51210934h1.3158373z"
              fill="#171E6C"
            />
          </g>
        </svg>
      );
    default:
      return (
        <svg
          className={classes}
          width="29"
          height="19"
          viewBox="0 0 29 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M26.58 19H2.42A2.4004 2.4004 0 0 1 0 16.62V2.38A2.4 2.4 0 0 1 2.42 0h24.16A2.4004 2.4004 0 0 1 29 2.38v14.25c-.0165 1.3216-1.0984 2.3811-2.42 2.37zM10 5.83c0-.46-.35-.83-.78-.83H3.78c-.43 0-.78.37-.78.83v3.34c0 .46.35.83.78.83h5.44c.43 0 .78-.37.78-.83V5.83z"
              fill="#DADDE2"
            />
            <path
              d="M25 15h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0H4c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1z"
              fill="#B2B6C1"
            />
          </g>
        </svg>
      );
  }
};

IconCard.defaultProps = {
  className: null,
  rootClassName: null,
  brand: 'default',
};

IconCard.propTypes = {
  className: string,
  rootClassName: string,
  brand: string,
};

export default IconCard;
