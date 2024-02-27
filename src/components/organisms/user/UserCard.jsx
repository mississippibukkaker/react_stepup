import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/NEOXGVKTmcA"
        alt="プロフィール"
      />
      <p>名前</p>
      <dl>
        <dt>メール</dt>
        <dd>111@aaa.com</dd>
        <dt>TEL</dt>
        <dd>090-111-1111</dd>
        <dt>会社名</dt>
        <dd>あああ株式会社</dd>
        <dt>WEB</dt>
        <dd>http://gsgs.com</dd>
      </dl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
