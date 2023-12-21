const qnaList = [
  {
    q: '1. 선호하는 고양이 털의 길이는?',
    a: [
      { answer: 'a. 나는 털이 긴 장모냥이가 좋아~!', type: ['Norwegian forest', 'tiger', 'dragon', 'chick'] },
      { answer: 'b. 나는 짧은 털을 가진 냥이가 좋아.', type: ['mouse', 'rabbit', 'horse', 'snake', 'dog', 'monkey'] },
      { answer: 'c. 나는 털이 없는 고양이가 좋아..', type: ['sheep', 'pig' ] },
    ]
  },
  {
    q: '2. 선호하는 색의 고양이는? ',
    a: [
      { answer: 'a. 고등어냥 , 턱시도냥, 삼색냥', type: ['mouse', 'rabbit', 'tiger', 'monkey'] },
      { answer: 'b. 단색냥', type: ['Norwegian forest', 'horse', 'snake', 'dog'] },
      { answer: 'c. 털 색은 상관없어~!', type: ['sheep', 'dragon', 'chick', 'pig'] },
    ]
  },
  {
    q: '3. 우리집 고냥이의 성격은?',
    a: [
      { answer: 'a. 개냥이가 좋아!', type: ['Norwegian forest', 'rabbit', 'tiger', 'dog', 'monkey'] },
      { answer: 'b. 무슨소리야 고양이는 도도해야지', type: ['sheep', 'chick', 'pig'] },
      { answer: 'c. 날 피하는 고양이가 좋아..', type: ['mouse', 'horse', 'snake', 'dragon'] }
    ]
  },
  {
    q: '4. 고양이의 혈통??',
    a: [
      { answer: 'a. 그냥 스트릿냥이 최고야 ', type: ['cow', 'tiger', 'dragon' ] },
      { answer: 'b. 혈통있는 품종묘가 좋아! ', type: ['Norwegian forest', 'dog', 'monkey', 'chick', 'pig' ] },
      { answer: 'c. 믹스냥이 좋아 ', type: ['mouse', 'rabbit', 'horse', 'snake' ] },
    ]
  },
  {
    q: '5. 털빠짐의 정도는 어느정도가 적당할까?',
    a: [
      { answer: 'a. 많이 빠지지 않았으면 해', type: ['Norwegian forest', 'sheep', 'dog', 'dragon', 'chick' ] },
      { answer: 'b. 털이 눈처럼 내려도 좋아', type: ['Norwegian forest', 'rabbit', 'horse', 'pig']},
      { answer: 'c. 털빠짐은 절대 안돼!', type: ['tiger', 'snake', 'monkey'] },
    ]
  },

  {
    q: '6. 고양이와 함께하는 활동이 있었으면 해?',
    a: [
      { answer: 'a. 응! 나는 산책도 같이 나가고 싶어', type: ['Norwegian forest', 'chick', 'pig' ] },
      { answer: 'b. 아니 집에서만 놀아도 충분해', type: ['mouse', 'rabbit', 'horse', 'dog' ] },
      { answer: 'c. 혼자서만 놀았으면 좋겠어..', type: ['cow', 'sheep', 'tiger', 'snake', 'monkey' ] },
    ]
  },
  {
    q: '7. 고양이가 사고를 친다면..?',
    a: [
      { answer: 'a. 사고 쳐도 돼!! 넌 귀여우니까', type: ['Norwegian forest', 'sheep', 'pig' ] },
      { answer: 'b. 음 가끔은 봐줄 수 있어', type: ['tiger', 'dragon', 'chick' ] },
      { answer: 'c. 제발 사고만 치지 말아다오', type: ['mouse', 'rabbit', 'horse', 'snake', 'dog', 'monkey' ] },
    ]
  },
  {
    q: '8. 고양이의 크기가 어느정도였으면 해?',
    a: [
      { answer: 'a. 중간이 좋아!', type: ['mouse', 'dragon', 'chick' ] },
      { answer: 'b. 조금 큰 고양이가 좋아', type: ['Norwegian forest', 'tiger', 'horse', 'snake', 'dog', 'monkey' ] },
      { answer: 'c. 왕발과 왕귀를 가진 거대한 고양이가 좋아', type: ['Norwegian forest', 'sheep', 'pig' ] },
    ]
  },
  {
    q: '9. 분양을 받는다면 선호하는 고양이의 가격은?',
    a: [
      { answer: 'a. 사지 말고 입양할래', type: ['sheep', 'mouse', 'snake', 'chick' ] },
      { answer: 'b. 나는 10만원에서 100만원 사이!', type: ['cow', 'rabbit', 'horse', 'pig' ] },
      { answer: 'c. 200만원 이상이어도 좋아', type: ['Norwegian forest', 'dog', 'monkey', 'dragon' ] },
    ]
  },
  {
    q: '10. 집사가 된다면 나는 우리집 고양이에게.. ',
    a: [
      { answer: 'a. 많은 사랑을 줄 수 있어!', type: ['Norwegian forest', 'chick', 'pig'] },
      { answer: 'b. 나는 고양이와 일심동체가 될래!', type: ['Norwegian forest', 'tiger', 'horse', 'snake' ] },
      { answer: 'c. 고양이 너무 귀여워ㅠㅠㅠ', type: ['Norwegian forest', 'sheep', 'rabbit', 'dog', 'monkey' ] },
    ]
  },
  {
    q: '11. 몇 마리나 기르고 싶어? ',
    a: [
      { answer: 'a. 하나만 제대로 예뻐해줄래!', type: ['Norwegian forest', 'dragon', 'chick', 'pig' ] },
      { answer: 'b. 두 세마리 정도가 좋아!', type: ['Norwegian forest', 'mouse', 'rabbit', 'horse', 'dog'] },
      { answer: 'c. 네 마리 이상의 주인님들을 모시고 싶어요.', type: ['tiger', 'snake', 'monkey' ] },
    ]
  },
  {
    q: '12. 고양이를 기르고 있어?',
    a: [
      { answer: 'a. 응! 기르는 중이야!!', type: ['Norwegian forest', 'horse', 'dragon', 'chick' ] },
      { answer: 'b. 예전에 길러본 적이 있어', type: ['mouse', 'tiger', 'snake', 'dog', 'monkey'] },
      { answer: 'c. 나만 없어 고양이..', type: ['cow', 'sheep', 'pig'] },
    ]
  }
]

const infoList = [
  {
    name: '왕 크니까 왕 귀엽다! <노르웨이 숲>',
    desc: '노르웨이 숲 고양이는 노르웨이 숲에서 자연 발생한 고양이로 고귀한 혈통을 가진 왕발 왕귀의 소유자! 털빠짐이 많지만 털이 길고 부드러우며 개냥이의 성격을 가져 집사만 바라보는 사랑스러운 세계최고우주최강짱짱 귀여운 고양이입니다! '
  },
  {
    name: '오묘한 색의 신비한 고양이! <러시안 블루>',
    desc: '길에서 나고 자랐어요 또는 무책임한 주인으로 인해 길로 내쫒기게 되었어요.. 이런 냥이들은 보호소에서 만나볼 수 있어요! 그렇다고 길에서 보인다고 무작정 냥줍해오면 안됩니다!! '
  },
  {
    name: '왕왕 크고 왕왕 귀여워!! <메인쿤>',
    desc: '가장 큰 고양이 타이틀을 가진 메인쿤! 발도 크고 귀도 크고 몸도 크다! 하지만 하는 짓은 영락없는 고양이!! 너무너무 귀여워 메인쿤~'
  },
  {
    name: '페르시아의 보물! <페르시안>',
    desc: '페르시아 제국에서 온 페르시안 고양이는 털이 길며 매우 우아합니다! 조용하고 따뜻한 성격을 가졌으며 과거와 현재 모두 인기만점인 고양이계의 인싸 고양이!'
  },
  {
    name: '너무 귀여워ㅠㅠ 인형같이 생겼네~ <렉돌>',
    desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
  },
  {
    name: '스트릿 출신이지만 귀여워~! <고등어 길냥이>',
    desc: '길에서 나고 자랐어요 고등어는 온순하고 애교가 많은 성격을 가진 냥이들이 많아요! 이런 냥이들은 보호소에서 만나볼 수 있어요! 그렇다고 길에서 보인다고 무작정 냥줍해오면 안됩니다!!'
  },
  {
    name: '스트릿 출신이지만 귀여워~! <치즈태비 길냥이>',
    desc: '치즈색의 길에서 사는 고양이!! 치즈라서 너무 귀엽고 순둥순둥해~ 아이 귀여워 우리 고양이~ 이런 냥이들은 보호소에서 만나볼 수 있어요! 그렇다고 길에서 보인다고 무작정 냥줍해오면 안됩니다!! '
  },
  {
    name: '스트릿 출신이지만 귀여워~! <삼색 길냥이>',
    desc: '너는 다채로운 색을 가졌네! 삼색 또는 여러 색이 섞인 고양이들은 보통 흰색 치즈 검정이 섞인 냥이들이 많이 보여요! 가끔은 주인을 힘들게 할 수도 있답니다. 이런 냥이들은 보호소에서 만나볼 수 있어요! 그렇다고 길에서 보인다고 무작정 냥줍해오면 안됩니다!! '
  },
  {
    name: '스트릿 출신이지만 귀여워~! <턱시도 길냥이>',
    desc: '턱시도냥이들은 검은색 바탕에 턱시도를 한 것처럼 생긴 귀엽고 도도한 고양이! 애교가 많아요 우리 고양이~ 이런 냥이들은 보호소에서 만나볼 수 있어요! 그렇다고 길에서 보인다고 무작정 냥줍해오면 안됩니다!! '
  },
  {
    name: '스트릿 출신이지만 귀여워~! <검정 길냥이>',
    desc: '검정냥이라 저녁에는 안 보이는 단점이..! 하지만 너무너무 예쁜 눈동자를 가지고 있네 우리 고양이~! 이런 냥이들은 보호소에서 만나볼 수 있어요! 그렇다고 길에서 보인다고 무작정 냥줍해오면 안됩니다!! '
  },
  {
    name: '스트릿 출신이지만 귀여워~! <흰색 길냥이>',
    desc: '흰색 고양이라 그런지 우아해보여! 찹쌀떡같기도 하네 너 매력있구나 야옹아! 이런 냥이들은 보호소에서 만나볼 수 있어요! 그렇다고 길에서 보인다고 무작정 냥줍해오면 안됩니다!! '
  },
  {
    name: '고양인데 털이 없네?! <스핑크스>',
    desc: '고양이지만 털이 없는 이 고양이! 우리 고양이는 털이 없는 대신 기름때가 자주 낍니다. 그치만 애교도 많고 사랑스러운 우리 스핑크스 고양이! 아이 귀여워라~ '
  },
]


