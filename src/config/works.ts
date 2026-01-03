// Works configuration
export const worksConfig = {
  projects: [
    {
      title: "kakutory",
      description: "Webの勉強を主目的に、自分のポートフォリオサイトとして作成しました。フロントエンドはReactとTypescript、ホスティングはAWS S3とCloudfrontを使っています。今後、ゲームとWeb、2つの側面での制作物を公開したり、日記を書いていったり、自由に使っていきたいなと思ってます。",
      technologies: ["React", "TypeScript", "AWS"],
      liveLink: "https://kakutory.com",
      githubLink: "https://github.com/Suke-H/kakutory",
      images: ["/work/kakutory/1.png", "/work/kakutory/2.png", "/work/kakutory/3.png"],
      date: "2023-12-08",
    },
    {
      title: "MyWordleProject",
      description: "AWSを使ったバックエンド開発を学ぶために、Wordleを模倣作成しました。フロントエンドやホスティングはKakutoryと同じで、バックエンドにAWS LambdaとDynamoDBを使用しています。作者でさえも毎日遊べるシステムとして、これ以上シンプルで優れたゲームって中々無いのではないでしょうか...",
      technologies: ["React", "TypeScript", "AWS", "Lambda", "DynamoDB"],
      liveLink: "https://kakutory.com/game_pages/MyWordleProject",
      githubLink: "https://github.com/Suke-H/wordle-project",
      images: ["/work/wordle/1.png", "/work/wordle/2.png", "/work/wordle/3.png"],
      date: "2024-01-15",
    },
    {
      title: "ゆるスプリント",
      description: "バックエンドの練習としてSlack Appを作成しました。「今週の目標を立てる・できたタスクにはスタンプを押す・振り返りをする」を繰り返しができるアプリです。結果はNotionのDBに書き込んで、いつでも振り返りできるようにしています。",
      technologies: ["Node.js", "Slack App", "Google Cloud", "Cloud Run"],
      liveLink: "https://github.com/Suke-H/yuru-sprint/",
      githubLink: "https://github.com/Suke-H/yuru-sprint",
      images: ["/work/yuruSprint/1.png", "/work/yuruSprint/2.png", "/work/yuruSprint/3.png", "/work/yuruSprint/4.png"],
      date: "2024-09-22",
    },
    {
      title: "『帰路』ステージエディタ",
      description: "目下作成中のパズルゲーム『帰路』にて、Unityに依存せず、受け渡しはJsonで行えるような補助ツールを作成したく、取り組んでいます。スマホでも触れるので、寝ころびながらステージを考えられて便利...うまく使っていきたいです。",
      technologies: ["React", "TypeScript", "Google Cloud", "Cloud Run"],
      liveLink: "https://kiro-stage-editor-708973678663.asia-northeast1.run.app/",
      githubLink: "https://github.com/Suke-H/kiro_stage_editor/",
      images: ["/work/kiro/1.png", "/work/kiro/2.png", "/work/kiro/3.png"],
      date: "2024-12-21",
    },
  ],
};
