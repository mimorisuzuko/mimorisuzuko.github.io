export type Publication = {
	author: string;
	title: string;
	booktitle?: string;
	journal?: string;
	series?: string;
	volume?: string;
	number?: string;
	articleno?: string;
	issue_date?: string;
	pages?: string;
	numpages?: string;
	year: string;
	month?: string;
	url?: string;
	eprint?: string;
	publisher?: string;
	address?: string;
	doi?: string;
	keywords?: string;
	isbn?: string;
	location?: string;
	acmid?: string;
	editor?: string;
	organization?: string;
	archivePrefix?: string;
	primaryClass?: string;
	_others_?: string;
	_miyashitacomurl_?: string;
	_videourl_?: string;
	_pressrelease_?: string;
};

export const arxivs: Publication[] = [
	{
		title:
			"Tappy Plugin for Figma: Predicting Tap Success Rates of User-Interface Elements under Development for Smartphones",
		author:
			"Shota Yamanaka and Hiroki Usuba and Junichi Sato and Naomi Sasaya and Fumiya Yamashita and Shuji Yamaguchi",
		year: "2024",
		eprint: "2411.00381",
		archivePrefix: "arXiv",
		primaryClass: "cs.HC",
		url: "https://arxiv.org/abs/2411.00381"
	},
	{
		title:
			"Tappy: Predicting Tap Accuracy of User-Interface Elements by Reverse-Engineering Webpage Structures",
		author:
			"Hiroki Usuba and Junichi Sato and Naomi Sasaya and Shota Yamanaka and Fumiya Yamashita",
		year: "2024",
		eprint: "2403.03097",
		archivePrefix: "arXiv",
		primaryClass: "cs.HC",
		url: "https://arxiv.org/abs/2403.03097"
	}
];

export const journalsWithReview: Publication[] = [
	{
		author: "薄羽,大樹 and 山中,祥太 and 宮下,芳明",
		title: "Motor WidthとVisual Widthが異なる状況下でのポインティング性能",
		journal: "情報処理学会論文誌",
		year: "2019",
		volume: "60",
		number: "4",
		pages: "1184--1199",
		month: "apr",
		_miyashitacomurl_: "https://research.miyashita.com/papers/J30"
	},
	{
		author: "Yamanaka, Shota and Usuba, Hiroki",
		title:
			"Rethinking the Dual Gaussian Distribution Model for Predicting Touch Accuracy in On-Screen-Start Pointing Tasks",
		year: "2020",
		issue_date: "November 2020",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		volume: "4",
		number: "ISS",
		url: "https://doi.org/10.1145/3427333",
		doi: "10.1145/3427333",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		month: "nov",
		articleno: "205",
		numpages: "20",
		keywords:
			"finger input, pointing, dual gaussian distribution model, touchscreens",
		_others_: "Acceptance rate 28%"
	},
	{
		author: "薄羽,大樹 and 山中,祥太 and 宮下,芳明",
		title: "直角に連結された幅の異なる経路をステアリングする操作のモデル化",
		journal: "情報処理学会論文誌",
		year: "2021",
		volume: "62",
		number: "2",
		pages: "574--584",
		month: "feb"
	},
	{
		author: "薄羽,大樹 and 山中,祥太 and 宮下,芳明",
		title: "Motor WidthとVisual Widthの差を考慮したポインティングのモデル化",
		journal: "情報処理学会論文誌",
		year: "2021",
		volume: "62",
		number: "2",
		pages: "585--593",
		month: "feb"
	},
	{
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		title:
			"Modeling Movement Times and Success Rates for Acquisition of One-Dimensional Targets with Uncertain Touchable Sizes",
		year: "2021",
		issue_date: "November 2021",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		volume: "5",
		number: "ISS",
		url: "https://doi.org/10.1145/3486953",
		doi: "10.1145/3486953",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		month: "nov",
		articleno: "487",
		numpages: "15",
		keywords:
			"success rate model, movement time model, uncertain touchable size, touch pointing",
		_others_: "Acceptance rate 29.9%"
	},
	{
		author: "Yamanaka, Shota and Usuba, Hiroki",
		title:
			"Computing Touch-Point Ambiguity on Mobile Touchscreens for Modeling Target Selection Times",
		year: "2022",
		issue_date: "Dec 2021",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		volume: "5",
		number: "4",
		url: "https://doi.org/10.1145/3494976",
		doi: "10.1145/3494976",
		journal: "Proc. ACM Interact. Mob. Wearable Ubiquitous Technol.",
		month: "dec",
		articleno: "186",
		numpages: "21",
		keywords: "pointing, mobile devices, Fitts' law, touchscreens, finger input"
	},
	{
		title:
			"視線を用いた1次元ポインティングにおける1次サッカードエラー率のモデル化",
		author: "島田雄輝 and 薄羽大樹 and 宮下芳明",
		journal: "情報処理学会論文誌",
		volume: "63",
		number: "2",
		pages: "413--423",
		year: "2021"
	},
	{
		author:
			"Usuba, Hiroki and Yamanaka, Shota and Sato, Junichi and Miyashita, Homei",
		title:
			"Predicting Touch Accuracy for Rectangular Targets by Using One-Dimensional Task Results",
		year: "2022",
		issue_date: "December 2022",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		volume: "6",
		number: "ISS",
		url: "https://doi.org/10.1145/3567732",
		doi: "10.1145/3567732",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		month: "nov",
		articleno: "579",
		numpages: "13",
		keywords: "Touch accuracy, performance modeling, touch-point distribution",
		_others_: "Acceptance rate 25.4%"
	},
	{
		author:
			"Yamanaka, Shota and Usuba, Hiroki and Stuerzlinger, Wolfgang and Miyashita, Homei",
		title:
			"The Effectiveness of Path-Segmentation for Modeling Lasso Times in Width-Varying Paths",
		year: "2022",
		issue_date: "December 2022",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		volume: "6",
		number: "ISS",
		url: "https://doi.org/10.1145/3567737",
		doi: "10.1145/3567737",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		month: "nov",
		articleno: "584",
		numpages: "20",
		keywords:
			"steering, human motor performance modeling, lassoing, Graphical user interfaces",
		_others_: "Acceptance rate 25.4%"
	},
	{
		author:
			"Shota Yamanaka and Hiroki Usuba and Haruki Takahashi and Homei Miyashita",
		title:
			"Predicting Success Rates in Steering Through Linear and Circular Paths by the Servo-Gaussian Model",
		journal: "International Journal of Human–Computer Interaction",
		volume: "0",
		number: "0",
		pages: "1--19",
		year: "2023",
		publisher: "Taylor & Francis",
		doi: "10.1080/10447318.2023.2212221",
		url: "https://doi.org/10.1080/10447318.2023.2212221",
		eprint: "https://doi.org/10.1080/10447318.2023.2212221"
	},
	{
		author: "Usuba, Hiroki and Yamanaka, Shota and Sato, Junichi",
		title:
			"Clarifying the Effect of Edge Targets in Touch Pointing through Crowdsourced Experiments",
		year: "2023",
		issue_date: "December 2023",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		volume: "7",
		number: "ISS",
		url: "https://doi.org/10.1145/3626469",
		doi: "10.1145/3626469",
		month: "nov",
		articleno: "433",
		numpages: "19",
		keywords: "edge targets, crowdsourced experiment, touch pointing"
	},
	{
		author: "Yamanaka, Shota and Usuba, Hiroki and Sato, Junichi",
		title:
			"Behavioral Differences between Tap and Swipe: Observations on Time, Error, Touch-point Distribution, and Trajectory for Tap-and-swipe Enabled Targets",
		year: "2024",
		isbn: "9798400703300",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		url: "https://doi.org/10.1145/3613904.3642272",
		doi: "10.1145/3613904.3642272",
		booktitle:
			"Proceedings of the CHI Conference on Human Factors in Computing Systems",
		articleno: "549",
		numpages: "12",
		keywords:
			"Human motor performance, endpoint distribution, error rate prediction",
		location: "Honolulu, HI, USA",
		series: "CHI '24"
	},
	{
		author:
			"Yamanaka, Shota and Usuba, Hiroki and Oba, Yosuke and Kinoshita, Taiki and Tomihari, Ryuto and Kasahara, Nobuhito and Miyashita, Homei",
		title:
			"Verifying Finger-Fitts Models for Normalizing Subjective Speed-Accuracy Biases",
		year: "2024",
		issue_date: "September 2024",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		volume: "8",
		number: "MHCI",
		url: "https://doi.org/10.1145/3676532",
		doi: "10.1145/3676532",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		month: "sep",
		articleno: "285",
		numpages: "24",
		keywords: "Fitts' Law, human motor performance, operation time prediction"
	},
	{
		author: "Yamanaka, Shota and Usuba, Hiroki",
		title:
			"0.2-mm-Step Verification of the Dual Gaussian Distribution Model with Large Sample Size for Predicting Tap Success Rates",
		year: "2024",
		issue_date: "December 2024",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		volume: "8",
		number: "ISS",
		url: "https://doi.org/10.1145/3698153",
		doi: "10.1145/3698153",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		month: "oct",
		articleno: "553",
		numpages: "20",
		keywords:
			"Human motor performance, endpoint distribution, error rate prediction"
	}
];

export const oralsDomestic: Publication[] = [
	{
		title: "Drive-by-Download 攻撃通信の可視化システム",
		author: "松本浩明 and 石井啓之 and 薄羽大樹 and 菊池浩明",
		journal: "コンピュータセキュリティシンポジウム2014論文集",
		volume: "2014",
		number: "2",
		pages: "9--16",
		year: "2014"
	},
	{
		title: "投げなわ選択と途中省略型投げなわ選択の性能評価",
		author: "薄羽大樹 and 山中祥太 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		volume: "2017-HCI-172",
		number: "22",
		pages: "1--6",
		year: "2017",
		_miyashitacomurl_: "https://research.miyashita.com/papers/D183/paper.pdf"
	},
	{
		title: "ドローン操縦におけるポインティングの評価",
		author: "山田開斗 and 薄羽大樹 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		volume: "2018-HCI-179",
		number: "1",
		pages: "1--6",
		year: "2018",
		_miyashitacomurl_: "https://research.miyashita.com/papers/D198/paper.pdf"
	},
	{
		title: "ドローン操縦におけるクロッシングの評価",
		author: "山田開斗 and 薄羽大樹 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		volume: "2019-HCI-181",
		number: "2",
		pages: "1--6",
		year: "2019",
		_miyashitacomurl_: "https://research.miyashita.com/papers/D198/paper.pdf",
		_others_: "学生奨励賞"
	},
	{
		title:
			"Valve Icon: オーバーシュート後に生成される壁を用いたポインティング高速化手法の提案",
		author: "木崎駿也 and 薄羽大樹 and 山田開斗 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		volume: "2019-HCI-185",
		number: "23",
		pages: "1--8",
		year: "2019"
	},
	{
		title: "MAGIC Pointingの操作時間予測モデル",
		author: "島田雄輝 and 薄羽大樹 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		volume: "2020-HCI-187",
		number: "22",
		pages: "1--7",
		year: "2020",
		_others_: "学生奨励賞"
	},
	{
		title: "Filling Linear Grids in Presence or Absence of Displayed Grids",
		author: "Hiroki Usuba and Shota Yamanaka and Homei Miyashita",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		volume: "2020-HCI-187",
		number: "31",
		pages: "1--6",
		year: "2020"
	},
	{
		title: "2次元ポインティングにおけるValve Iconの性能評価",
		author: "木崎駿也 and 薄羽大樹 and 山田開斗 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		volume: "2020-HCI-187",
		number: "32",
		pages: "1--7",
		year: "2020"
	},
	{
		title:
			"表示タイミングが不明なテンポラルポインティングにおけるエラー率モデル",
		author: "清水美玖 and 島田雄輝 and 薄羽大樹 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		volume: "2021-HCI-191",
		number: "1",
		pages: "1--6",
		year: "2021",
		_others_: "学生奨励賞"
	},
	{
		title: "画面角と画面端のターゲット配置が操作時間に与える影響",
		author: "大塲洋介 and 薄羽大樹 and 山中祥太 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		volume: "2022-HCI-197",
		number: "55",
		pages: "1--8",
		year: "2022"
	},
	{
		title:
			"スマートフォン用ウェブページにおけるタップ成功率推定ツールTappyの実用化",
		author: "山中祥太 and 薄羽大樹 and 山下郁矢 and 笹谷奈翁美 and 佐藤潤一",
		journal: "研究報告エンタテインメントコンピューティング（EC）",
		volume: "2024-EC-72",
		number: "25",
		pages: "1--7",
		year: "2024"
	}
];

export const papersDomesticWithReview: Publication[] = [
	{
		author: "薄羽大樹 and 宮下芳明",
		title: "コメントイン：コメントを先に書くことによる新形態のAPIリファレンス",
		journal:
			"第23回インタラクティブシステムとソフトウェアに関するワークショップ論文集（WISS2015）",
		year: "2015",
		_miyashitacomurl_: "https://research.miyashita.com/papers/D153/paper.pdf",
		_videourl_: "https://www.youtube.com/watch?v=wnXBYoBeNv4",
		_others_: "Acceptance rate 44%"
	},
	{
		author: "薄羽大樹 and 山中祥太 and 宮下芳明",
		title: "Motor WidthとVisual Widthの差を考慮したポインティングのモデル化",
		journal: "インタラクション2019論文集",
		pages: "122--130",
		year: "2019",
		_miyashitacomurl_: "https://research.miyashita.com/papers/D214/paper.pdf",
		_others_: "Acceptance rate 53%"
	},
	{
		author: "薄羽大樹 and 山中祥太 and 宮下芳明",
		title: "幅の異なる経路が連結されたコーナリングタスクのモデル化",
		journal: "インタラクション2020論文集",
		pages: "78--86",
		year: "2020",
		_miyashitacomurl_: "https://research.miyashita.com/papers/D230/paper.pdf",
		_others_: "Acceptance rate 50%"
	},
	{
		author: "島田雄輝 and 薄羽大樹 and 宮下芳明",
		title:
			"視線を用いた1次元ポインティングにおける1次サッカードエラー率のモデル化",
		journal: "インタラクション2021論文集",
		year: "2021",
		pages: "1--10"
	}
];

export const papersInternationalWithReview: Publication[] = [
	{
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		title:
			"User Performance by the Difference Between Motor and Visual Widths for Small Target Pointing",
		booktitle:
			"Proceedings of the 10th Nordic Conference on Human-Computer Interaction",
		series: "NordiCHI '18",
		year: "2018",
		isbn: "978-1-4503-6437-9",
		location: "Oslo, Norway",
		pages: "161--169",
		numpages: "9",
		url: "http://doi.acm.org/10.1145/3240167.3240171",
		doi: "10.1145/3240167.3240171",
		acmid: "3240171",
		publisher: "ACM",
		address: "New York, NY, USA",
		keywords:
			"Fitts' law, difference in motor and visual widths, human performance, small target pointing",
		_others_: "Full paper; acceptance rate 24.5%",
		_miyashitacomurl_: "https://research.miyashita.com/papers/I33/paper.pdf"
	},
	{
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		title:
			"Pointing to Targets with Difference Between Motor and Visual Widths",
		booktitle:
			"Proceedings of the 30th Australian Conference on Computer-Human Interaction",
		series: "OzCHI '18",
		year: "2018",
		isbn: "978-1-4503-6188-0",
		location: "Melbourne, Australia",
		pages: "374--383",
		numpages: "10",
		url: "http://doi.acm.org/10.1145/3292147.3292150",
		doi: "10.1145/3292147.3292150",
		acmid: "3292150",
		publisher: "ACM",
		address: "New York, NY, USA",
		keywords:
			"different motor and visual target widths, graphical user interfaces, human performance, target acquisition",
		_others_: "Long paper; acceptance rate 40%",
		_miyashitacomurl_: "https://research.miyashita.com/papers/I34/paper.pdf"
	},
	{
		author: "Yamada, Kaito and Usuba, Hiroki and Miyashita, Homei",
		editor: "Stephanidis, Constantine",
		title: "Modeling Drone Crossing Movement with Fitts' Law",
		booktitle: "HCI International 2019 -- Late Breaking Papers",
		year: "2019",
		publisher: "Springer International Publishing",
		address: "Cham",
		pages: "422--432",
		isbn: "978-3-030-30033-3",
		url: "https://doi.org/10.1007/978-3-030-30033-3_33",
		_miyashitacomurl_: "https://research.miyashita.com/papers/I38/paper.pdf"
	},
	{
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		title:
			"Touch Pointing Performance for Uncertain Touchable Sizes of 1D Targets",
		booktitle:
			"Proceedings of the 21st International Conference on Human-Computer Interaction with Mobile Devices and Services",
		series: "MobileHCI '19",
		year: "2019",
		isbn: "978-1-4503-6825-4",
		location: "Taipei, Taiwan",
		pages: "20:1--20:8",
		articleno: "20",
		numpages: "8",
		url: "http://doi.acm.org/10.1145/3338286.3340131",
		doi: "10.1145/3338286.3340131",
		acmid: "3340131",
		publisher: "ACM",
		address: "New York, NY, USA",
		keywords:
			"Effects of motor and visual widths, Fitts' law, GUIs, finger pointing",
		_others_: "Acceptance rate 26.4%",
		_miyashitacomurl_: "https://research.miyashita.com/papers/I39/paper.pdf"
	},
	{
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		title:
			"Comparing Lassoing Criteria and Modeling Straight-Line and One-Loop Lassoing Motions Considering Criteria",
		year: "2019",
		isbn: "9781450368919",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		url: "https://doi.org/10.1145/3343055.3359707",
		doi: "10.1145/3343055.3359707",
		booktitle:
			"Proceedings of the 2019 ACM International Conference on Interactive Surfaces and Spaces",
		pages: "181--191",
		numpages: "11",
		keywords:
			"multiple selection, steering law, graphical user interfaces, lasso criteria",
		location: "Daejeon, Republic of Korea",
		series: "ISS '19",
		_others_: "Academic Paper; acceptance rate 30.6%",
		_miyashitacomurl_: "https://research.miyashita.com/papers/I40/paper.pdf"
	},
	{
		author: "Nakanishi, Mayumi and Usuba, Hiroki and Miyashita, Homei",
		title: "Effects of Delboeuf Illusion on Pointing Performance",
		year: "2019",
		isbn: "9781450376969",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		url: "https://doi.org/10.1145/3369457.3369520",
		doi: "10.1145/3369457.3369520",
		booktitle:
			"Proceedings of the 31st Australian Conference on Human-Computer-Interaction",
		pages: "476--479",
		numpages: "4",
		keywords:
			"Fitts' law, pointing movements, Delboeuf illusion, visual illusion",
		location: "Fremantle, WA, Australia",
		series: "OZCHI'19",
		_others_: "Short paper; acceptance rate 48.2%",
		_miyashitacomurl_: "https://research.miyashita.com/papers/I41/paper.pdf"
	},
	{
		author:
			"Yamanaka, Shota and Usuba, Hiroki and Takahashi, Haruki and Miyashita, Homei",
		title:
			"Peephole Steering: Speed Limitation Models for Steering Performance in Restricted View Sizes",
		booktitle: "Proceedings of Graphics Interface 2020",
		series: "GI 2020",
		year: "2020",
		isbn: "978-0-9947868-5-2",
		location: "University of Toronto",
		pages: "461--469",
		numpages: "9",
		doi: "10.20380/GI2020.46",
		publisher:
			"Canadian Human-Computer Communications Society / Société canadienne du dialogue humain-machine",
		_others_: "Acceptance rate 51.7%"
	},
	{
		author:
			"Yamanaka, Shota and Usuba, Hiroki and Takahashi, Haruki and Miyashita, Homei",
		title:
			"Servo-Gaussian Model to Predict Success Rates in Manual Tracking: Path Steering and Pursuit of 1D Moving Target",
		year: "2020",
		isbn: "9781450375146",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		url: "https://doi.org/10.1145/3379337.3415896",
		doi: "10.1145/3379337.3415896",
		booktitle:
			"Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology",
		pages: "844--857",
		numpages: "14",
		keywords:
			"servo-mechanism model, moving targets, success rate prediction, manual tracking, steering law",
		location: "Virtual Event, USA",
		series: "UIST '20",
		_others_: "Acceptance rate 21.6%"
	},
	{
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		title:
			"A Model for Pointing at Targets with Different Clickable and Visual Widths and with Distractors",
		year: "2020",
		isbn: "9781450389754",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		url: "https://doi.org/10.1145/3441000.3441019",
		doi: "10.1145/3441000.3441019",
		booktitle: "32nd Australian Conference on Human-Computer Interaction",
		pages: "1--10",
		numpages: "10",
		keywords:
			"GUIs, distractor, pointing, Difference between clickable and visual widths, Fitts' law",
		location: "Sydney, NSW, Australia",
		series: "OzCHI '20",
		_others_: "Acceptance rate 46%"
	},
	{
		author: "Yamanaka, Shota and Usuba, Hiroki and Miyashita, Homei",
		title:
			"Bivariate Effective Width Method to Improve the Normalization Capability for Subjective Speed-Accuracy Biases in Rectangular-Target Pointing",
		year: "2022",
		isbn: "9781450391573",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		url: "https://doi.org/10.1145/3491102.3517466",
		doi: "10.1145/3491102.3517466",
		booktitle: "CHI Conference on Human Factors in Computing Systems",
		articleno: "211",
		numpages: "13",
		keywords:
			"crowdsourcing, graphical user interface, Fitts' law, human motor performance, pointing",
		location: "New Orleans, LA, USA",
		series: "CHI '22",
		_others_: "Acceptance rate 24.6%"
	},
	{
		author: "Yamanaka, Shota and Usuba, Hiroki",
		title:
			"Tuning Endpoint-Variability Parameters by Observed Error Rates to Obtain Better Prediction Accuracy of Pointing Misses",
		year: "2023",
		isbn: "9781450394215",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		url: "https://doi.org/10.1145/3544548.3580746",
		doi: "10.1145/3544548.3580746",
		booktitle:
			"Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems",
		articleno: "579",
		numpages: "18",
		keywords:
			"error rate prediction, endpoint distribution, Human motor performance",
		location: "Hamburg, Germany",
		series: "CHI '23"
	}
];

export const postersAndDemosDomestic: Publication[] = [
	{
		title: "Extended Lasso: 延長線を利用する自由選択手法の提案",
		author: "薄羽大樹 and 宮下芳明",
		booktitle:
			"第25回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS2017) ",
		year: "2017",
		organization: "日本ソフトウェア科学会",
		_miyashitacomurl_: "https://research.miyashita.com/papers/D190/paper.pdf",
		_videourl_: "https://www.youtube.com/watch?v=0HAUZrGvOnc"
	},
	{
		title:
			"タッチパネルを拡張する紙製インタフェースを搭載したインタラクティブパッケージの開発",
		author:
			"加藤邦拓 and 薄羽大樹 and 鳥山らいか and 竹内まゆ and 野崎玲那 and 細谷美月 and 宮下芳明",
		booktitle: "インタラクション2018論文集",
		pages: "889--894",
		year: "2018",
		organization: "情報処理学会",
		_miyashitacomurl_: "https://research.miyashita.com/papers/D193/paper.pdf",
		_videourl_: "https://www.youtube.com/watch?v=dsO3_G_79EY",
		_pressrelease_:
			"http://www.meiji.ac.jp/koho/press/2017/6t5h7p00000qml8e.html",
		_others_: "プレミアム発表; Selection rate 18.5%"
	},
	{
		title: "数式の記述方法を選択できるプログラミングインタフェース",
		author: "島田雄輝 and 薄羽大樹 and 宮下芳明",
		booktitle:
			"第26回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS2018) ",
		year: "2018",
		organization: "日本ソフトウェア科学会",
		_miyashitacomurl_: "https://research.miyashita.com/papers/D211/paper.pdf",
		_videourl_: "https://www.youtube.com/watch?v=wx-NvKkorrk"
	},
	{
		author: "池田沙厘奈 and 薄羽大樹 and 宮下芳明",
		title: "視線追跡HMDと眉間を用いた「目掴み」の評価",
		journal: "インタラクション2019論文集",
		pages: "193--198",
		year: "2019",
		_miyashitacomurl_: "https://research.miyashita.com/papers/D215",
		_videourl_: "https://www.youtube.com/watch?v=_QZGLHWzPXE"
	},
	{
		author: "山室日向人 and 薄羽大樹 and 宮下芳明",
		title: "Colorful Zeebra: 母音と子音を着色するリリック作成システム",
		journal: "インタラクション2021論文集",
		year: "2021",
		pages: "1--3"
	}
];

export const postersAndDemosInternationalWithReview: Publication[] = [
	{
		author: "Yamada, Kaito and Usuba, Hiroki and Miyahita, Homei",
		title: "Modeling Drone Pointing Movement with Fitts' Law",
		booktitle:
			"Extended Abstracts of the 2019 CHI Conference on Human Factors in Computing Systems",
		series: "CHI EA '19",
		year: "2019",
		isbn: "978-1-4503-5971-9",
		location: "Glasgow, Scotland Uk",
		pages: "LBW2519:1--LBW2519:6",
		articleno: "LBW2519",
		numpages: "6",
		url: "http://doi.acm.org/10.1145/3290607.3312835",
		doi: "10.1145/3290607.3312835",
		acmid: "3312835",
		publisher: "ACM",
		address: "New York, NY, USA",
		keywords: "drone, fitts' law, human-drone interaction, pointing task",
		_others_: "Acceptance rate 42.2%",
		_miyashitacomurl_: "https://research.miyashita.com/papers/I37/paper.pdf",
		_videourl_: "https://www.youtube.com/watch?v=TyjpMxyI9q8"
	}
];
