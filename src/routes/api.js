const url = require("url");

export const confirmEmail = async (req, res) => {
  try {
    return res.send("이메일 인증이 완료 돠었습니다!");
  } catch (e) {
    return res.sendStatus(403);
  }
};
