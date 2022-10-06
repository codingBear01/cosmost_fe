/* icons */
import * as GiIcons from 'react-icons/gi';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';

export const MAIN_COURSES = [
  {
    id: 1,
    a_self: 'start',
    title: '공유된 모든 코스',
    icon: <GiIcons.GiRoad />,
  },
  {
    id: 2,
    a_self: 'end',
    title: '인기 있는 코스',
    icon: <FiIcons.FiThumbsUp />,
  },
  {
    id: 3,
    a_self: 'start',
    title: '높은 평가 받은 코스',
    icon: <FiIcons.FiStar />,
  },
  {
    id: 4,
    a_self: 'end',
    title: '최근 추가된 코스',
    icon: <MdIcons.MdOutlineAlarmOn />,
  },
];
