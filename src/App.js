import { useCallback, useState } from "react";

const data = [
  {
    id: 1,
    name: "リオネル・メッシ",
    team: "FCバルセロナ",
    description:
      "アルゼンチンサンタフェ州ロサリオ出身のイタリア系アルゼンチン人サッカー選手。リーガ・エスパニョーラ・FCバルセロナ所属。アルゼンチン代表。ポジションはフォワード (wikipedia)",
    isFollow: false
  },
  {
    id: 2,
    name: "クリスティアーノ・ロナウド",
    team: "Juventus",
    description:
      "ポルトガル・フンシャル出身のサッカー選手。セリエA・ユヴェントスFC所属。ポルトガル代表。ポジションはフォワード (wikipedia)",
    isFollow: true
  },
  {
    id: 3,
    name: "ネイマール",
    team: "パリサンジェルマン",
    description:
      "ブラジル・サンパウロ州モジ・ダス・クルーゼス出身のサッカー選手。ブラジル代表。リーグ・アン・パリ・サンジェルマンFC所属。ポジションはフォワード (wikipedia)",
    isFollow: false
  }
];

function App() {
  const [accounts, setAccounts] = useState(data);

  // フォローボタン押した時
  const onClickFollow = useCallback(
    (id) => {
      const updatedAccounts = accounts.map((account) => {
        if (account.id === id) {
          return {
            ...account,
            isFollow: !account.isFollow
          };
        } else {
          return account;
        }
      });
      setAccounts(updatedAccounts);
    },
    [accounts, setAccounts]
  );

  return (
    <ul className="accountList">
      {accounts.map((account) => {
        return (
          <li key={account.id} className="accountList__item">
            <div>
              <div className="account__summary">
                <div>
                  <p className="account__name">{account.name}</p>
                  <p className="account__team">{account.team}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className={`followBtn ${account.isFollow ? 'isFollow' : ''}`}
                    onClick={() => onClickFollow(account.id)}
                  >
                    {account.isFollow ? 'フォロー中' : 'フォローする'}
                  </button>
                </div>
              </div>
              <p className="account__description">{account.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default App;