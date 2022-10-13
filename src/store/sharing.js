/* CONSTANTS */
const { Kakao, location } = window;
const SHARED_URL = location.href;

/* Kakao 공유하기 함수 */
export const sharingByKakao = (data) => {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: data.title,
      description: data.description,
      imageUrl: data.courseImages[0].imageUrl,
      link: {
        webUrl: SHARED_URL,
        mobileWebUrl: SHARED_URL,
      },
    },
    buttons: [
      {
        title: '자세히 보기',
        link: {
          webUrl: SHARED_URL,
          mobileWebUrl: SHARED_URL,
        },
      },
    ],
  });
};
