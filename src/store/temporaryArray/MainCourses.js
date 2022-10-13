/* icons */
import * as GiIcons from 'react-icons/gi';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';

export const MAIN_COURSES = [
  {
    id: 1,
    alignSelf: 'start',
    title: '공유된 모든 코스',
    icon: <GiIcons.GiRoad />,
    path: '/searched-courses',
  },
  {
    id: 2,
    alignSelf: 'end',
    title: '인기 있는 코스',
    icon: <FiIcons.FiThumbsUp />,
    path: '/searched-courses',
  },
  {
    id: 3,
    alignSelf: 'start',
    title: '높은 평가 받은 코스',
    icon: <FiIcons.FiStar />,
    path: '/searched-courses',
  },
  {
    id: 4,
    alignSelf: 'end',
    title: '최근 추가된 코스',
    icon: <MdIcons.MdOutlineAlarmOn />,
    path: '/searched-courses',
  },
];
