/* icons */
import * as GiIcons from 'react-icons/gi';
import * as FiIcons from 'react-icons/fi';

export const MAIN_COURSES = [
  {
    id: 1,
    alignSelf: 'start',
    title: '공유된 모든 코스',
    icon: <GiIcons.GiRoad />,
    path: '/courses/all',
    type: 'all',
  },
  {
    id: 2,
    alignSelf: 'end',
    title: '인기 있는 코스',
    icon: <FiIcons.FiThumbsUp />,
    path: '/courses/popular',
    type: 'popular',
  },
  {
    id: 3,
    alignSelf: 'start',
    title: '높은 평가 받은 코스',
    icon: <FiIcons.FiStar />,
    path: '/courses/rate',
    type: 'rate',
  },
];
