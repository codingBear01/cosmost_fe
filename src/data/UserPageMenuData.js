/* icons */
import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const USER_PAGE_MENU_LIST = [
  {
    id: 1,
    icon: <AiIcons.AiOutlineAppstoreAdd />,
    title: '코스 등록하기',
    path: '/',
  },
  {
    id: 2,
    icon: <TbIcons.TbRoad />,
    title: '내가 등록한 코스',
    path: '/',
  },
  {
    id: 3,
    icon: <FaIcons.FaRegThumbsUp />,
    title: '좋아요 한 코스',
    path: '/',
  },
  {
    id: 4,
    icon: <MdIcons.MdOutlineRateReview />,
    title: '내가 남긴 리뷰',
    path: '/',
  },
  {
    id: 5,
    icon: <AiIcons.AiOutlineAlert />,
    title: '신고하기',
    path: '/',
  },
  {
    id: 6,
    icon: <RiIcons.RiPoliceCarLine />,
    title: '신고내역',
    path: '/',
  },
  {
    id: 7,
    icon: <AiIcons.AiOutlineLogout />,
    title: '로그아웃',
    path: '/',
  },
];
