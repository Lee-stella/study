import classNames from "classnames/bind";

import styles from "assets/css/default.module.scss";
import DualListbox from "component/DualListBox";
import { DUAL_LISTBOX_CHECK_NON_SELECT } from "store/Type";
const cx = classNames.bind(styles);

function App() {
  const primaryMock = [
    {
      name: "다빈치형인재",
      visible: true,
      checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
      child: [
        {
          name: "인문계열",
          visible: true,
          checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
          child: [
            {
              name: "국어1국문학과",
              visible: false,
              checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
              child: []
            },
            {
              name: "국어2국문학과",
              visible: false,
              checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
              child: []
            },
            {
              name: "국어3국문학과",
              visible: false,
              checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
              child: []
            }
          ]
        },
        {
          name: "자연계열",
          visible: true,
          checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
          child: [
            {
              name: "수학국문학과",
              visible: false,
              checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
              child: []
            }
          ]
        }
      ]
    },
    {
      name: "탐구형인재",
      visible: true,
      checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
      child: [
        {
          name: "사회과학",
          visible: true,
          checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
          child: [
            {
              name: "사회복지학부",
              visible: false,
              checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
              child: []
            },
            {
              name: "문헌정보학과",
              visible: false,
              checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
              child: []
            }
          ]
        }
      ]
    }
  ];
  const secondaryMock = [
    {
      name: "다빈치형인재",
      visible: true,
      checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
      child: [
        {
          name: "인문계열",
          visible: true,
          checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
          child: [
            {
              name: "국어4국문학과",
              visible: false,
              checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
              child: []
            }
          ]
        },
        {
          name: "자연계열",
          visible: true,
          checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
          child: [
            {
              name: "수학국문학과1",
              visible: false,
              checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
              child: []
            }
          ]
        }
      ]
    },
    {
      name: "탐구형인재",
      visible: true,
      checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
      child: [
        {
          name: "사회과학2",
          visible: true,
          checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
          child: [
            {
              name: "사회과학2-1",
              visible: false,
              checkType: DUAL_LISTBOX_CHECK_NON_SELECT,
              child: []
            }
          ]
        }
      ]
    }
  ];
  return (
    <DualListbox primaryData={primaryMock} secondaryData={secondaryMock} />
  );
}

export default App;
