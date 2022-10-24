//함수 집합

// base64ImgSrc 이미지 경로를 바이너리 데이터로 변환한 뒤 변환한 바이너리 데이터와 MIME-Type을 배열로 반환하는 함수.
const base64ImgSrcToImgBinaryData = (imgSrc) => {
  let returnArr = [];
  const mimeTypeReg = /data:(.*);/;
  const Base64DataReg = /,(.*)/;
  if (imgSrc !== "none") {
    const itemMimeType = imgSrc.match(mimeTypeReg)
      ? imgSrc.match(mimeTypeReg)[1]
      : null;
    const itemBase64Data = imgSrc.match(Base64DataReg)
      ? imgSrc.match(Base64DataReg)[1]
      : null;
    const itemBinaryData = atob(itemBase64Data);

    let itemBinaryDataLength = itemBinaryData.length;
    let itemUnicodeBinaryData = new Uint8Array(itemBinaryDataLength);
    while (itemBinaryDataLength--) {
      itemUnicodeBinaryData[itemBinaryDataLength] =
        itemBinaryData.charCodeAt(itemBinaryDataLength);
    }

    returnArr.push(itemUnicodeBinaryData);
    returnArr.push(itemMimeType);
    return returnArr;
  }

  return null;
};

export { base64ImgSrcToImgBinaryData };
