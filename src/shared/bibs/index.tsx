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
		archivePrefix: "arXiv",
		author:
			"Shota Yamanaka and Hiroki Usuba and Junichi Sato and Naomi Sasaya and Fumiya Yamashita and Shuji Yamaguchi",
		eprint: "2411.00381",
		primaryClass: "cs.HC",
		title:
			"Tappy Plugin for Figma: Predicting Tap Success Rates of User-Interface Elements under Development for Smartphones",
		url: "https://arxiv.org/abs/2411.00381",
		year: "2024"
	},
	{
		archivePrefix: "arXiv",
		author:
			"Hiroki Usuba and Junichi Sato and Naomi Sasaya and Shota Yamanaka and Fumiya Yamashita",
		eprint: "2403.03097",
		primaryClass: "cs.HC",
		title:
			"Tappy: Predicting Tap Accuracy of User-Interface Elements by Reverse-Engineering Webpage Structures",
		url: "https://arxiv.org/abs/2403.03097",
		year: "2024"
	}
];

export const journalsWithReview: Publication[] = [
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/J30",
		author: "薄羽,大樹 and 山中,祥太 and 宮下,芳明",
		journal: "情報処理学会論文誌",
		month: "apr",
		number: "4",
		pages: "1184--1199",
		title: "Motor WidthとVisual Widthが異なる状況下でのポインティング性能",
		volume: "60",
		year: "2019"
	},
	{
		_others_: "Acceptance rate 28%",
		address: "New York, NY, USA",
		articleno: "205",
		author: "Yamanaka, Shota and Usuba, Hiroki",
		doi: "10.1145/3427333",
		issue_date: "November 2020",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		keywords:
			"finger input, pointing, dual gaussian distribution model, touchscreens",
		month: "nov",
		number: "ISS",
		numpages: "20",
		publisher: "Association for Computing Machinery",
		title:
			"Rethinking the Dual Gaussian Distribution Model for Predicting Touch Accuracy in On-Screen-Start Pointing Tasks",
		url: "https://doi.org/10.1145/3427333",
		volume: "4",
		year: "2020"
	},
	{
		author: "薄羽,大樹 and 山中,祥太 and 宮下,芳明",
		journal: "情報処理学会論文誌",
		month: "feb",
		number: "2",
		pages: "574--584",
		title: "直角に連結された幅の異なる経路をステアリングする操作のモデル化",
		volume: "62",
		year: "2021"
	},
	{
		author: "薄羽,大樹 and 山中,祥太 and 宮下,芳明",
		journal: "情報処理学会論文誌",
		month: "feb",
		number: "2",
		pages: "585--593",
		title: "Motor WidthとVisual Widthの差を考慮したポインティングのモデル化",
		volume: "62",
		year: "2021"
	},
	{
		_others_: "Acceptance rate 29.9%",
		address: "New York, NY, USA",
		articleno: "487",
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		doi: "10.1145/3486953",
		issue_date: "November 2021",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		keywords:
			"success rate model, movement time model, uncertain touchable size, touch pointing",
		month: "nov",
		number: "ISS",
		numpages: "15",
		publisher: "Association for Computing Machinery",
		title:
			"Modeling Movement Times and Success Rates for Acquisition of One-Dimensional Targets with Uncertain Touchable Sizes",
		url: "https://doi.org/10.1145/3486953",
		volume: "5",
		year: "2021"
	},
	{
		address: "New York, NY, USA",
		articleno: "186",
		author: "Yamanaka, Shota and Usuba, Hiroki",
		doi: "10.1145/3494976",
		issue_date: "Dec 2021",
		journal: "Proc. ACM Interact. Mob. Wearable Ubiquitous Technol.",
		keywords:
			"pointing, mobile devices, Fitts' law, touchscreens, finger input",
		month: "dec",
		number: "4",
		numpages: "21",
		publisher: "Association for Computing Machinery",
		title:
			"Computing Touch-Point Ambiguity on Mobile Touchscreens for Modeling Target Selection Times",
		url: "https://doi.org/10.1145/3494976",
		volume: "5",
		year: "2022"
	},
	{
		author: "島田雄輝 and 薄羽大樹 and 宮下芳明",
		journal: "情報処理学会論文誌",
		number: "2",
		pages: "413--423",
		title:
			"視線を用いた1次元ポインティングにおける1次サッカードエラー率のモデル化",
		volume: "63",
		year: "2021"
	},
	{
		_others_: "Acceptance rate 25.4%",
		address: "New York, NY, USA",
		articleno: "579",
		author:
			"Usuba, Hiroki and Yamanaka, Shota and Sato, Junichi and Miyashita, Homei",
		doi: "10.1145/3567732",
		issue_date: "December 2022",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		keywords: "Touch accuracy, performance modeling, touch-point distribution",
		month: "nov",
		number: "ISS",
		numpages: "13",
		publisher: "Association for Computing Machinery",
		title:
			"Predicting Touch Accuracy for Rectangular Targets by Using One-Dimensional Task Results",
		url: "https://doi.org/10.1145/3567732",
		volume: "6",
		year: "2022"
	},
	{
		_others_: "Acceptance rate 25.4%",
		address: "New York, NY, USA",
		articleno: "584",
		author:
			"Yamanaka, Shota and Usuba, Hiroki and Stuerzlinger, Wolfgang and Miyashita, Homei",
		doi: "10.1145/3567737",
		issue_date: "December 2022",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		keywords:
			"steering, human motor performance modeling, lassoing, Graphical user interfaces",
		month: "nov",
		number: "ISS",
		numpages: "20",
		publisher: "Association for Computing Machinery",
		title:
			"The Effectiveness of Path-Segmentation for Modeling Lasso Times in Width-Varying Paths",
		url: "https://doi.org/10.1145/3567737",
		volume: "6",
		year: "2022"
	},
	{
		author:
			"Shota Yamanaka and Hiroki Usuba and Haruki Takahashi and Homei Miyashita",
		doi: "10.1080/10447318.2023.2212221",
		eprint: "https://doi.org/10.1080/10447318.2023.2212221",
		journal: "International Journal of Human–Computer Interaction",
		number: "0",
		pages: "1--19",
		publisher: "Taylor & Francis",
		title:
			"Predicting Success Rates in Steering Through Linear and Circular Paths by the Servo-Gaussian Model",
		url: "https://doi.org/10.1080/10447318.2023.2212221",
		volume: "0",
		year: "2023"
	},
	{
		address: "New York, NY, USA",
		articleno: "433",
		author: "Usuba, Hiroki and Yamanaka, Shota and Sato, Junichi",
		doi: "10.1145/3626469",
		issue_date: "December 2023",
		keywords: "edge targets, crowdsourced experiment, touch pointing",
		month: "nov",
		number: "ISS",
		numpages: "19",
		publisher: "Association for Computing Machinery",
		title:
			"Clarifying the Effect of Edge Targets in Touch Pointing through Crowdsourced Experiments",
		url: "https://doi.org/10.1145/3626469",
		volume: "7",
		year: "2023"
	},
	{
		address: "New York, NY, USA",
		articleno: "549",
		author: "Yamanaka, Shota and Usuba, Hiroki and Sato, Junichi",
		booktitle:
			"Proceedings of the CHI Conference on Human Factors in Computing Systems",
		doi: "10.1145/3613904.3642272",
		isbn: "9798400703300",
		keywords:
			"Human motor performance, endpoint distribution, error rate prediction",
		location: "Honolulu, HI, USA",
		numpages: "12",
		publisher: "Association for Computing Machinery",
		series: "CHI '24",
		title:
			"Behavioral Differences between Tap and Swipe: Observations on Time, Error, Touch-point Distribution, and Trajectory for Tap-and-swipe Enabled Targets",
		url: "https://doi.org/10.1145/3613904.3642272",
		year: "2024"
	},
	{
		address: "New York, NY, USA",
		articleno: "285",
		author:
			"Yamanaka, Shota and Usuba, Hiroki and Oba, Yosuke and Kinoshita, Taiki and Tomihari, Ryuto and Kasahara, Nobuhito and Miyashita, Homei",
		doi: "10.1145/3676532",
		issue_date: "September 2024",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		keywords: "Fitts' Law, human motor performance, operation time prediction",
		month: "sep",
		number: "MHCI",
		numpages: "24",
		publisher: "Association for Computing Machinery",
		title:
			"Verifying Finger-Fitts Models for Normalizing Subjective Speed-Accuracy Biases",
		url: "https://doi.org/10.1145/3676532",
		volume: "8",
		year: "2024"
	},
	{
		address: "New York, NY, USA",
		articleno: "553",
		author: "Yamanaka, Shota and Usuba, Hiroki",
		doi: "10.1145/3698153",
		issue_date: "December 2024",
		journal: "Proc. ACM Hum.-Comput. Interact.",
		keywords:
			"Human motor performance, endpoint distribution, error rate prediction",
		month: "oct",
		number: "ISS",
		numpages: "20",
		publisher: "Association for Computing Machinery",
		title:
			"0.2-mm-Step Verification of the Dual Gaussian Distribution Model with Large Sample Size for Predicting Tap Success Rates",
		url: "https://doi.org/10.1145/3698153",
		volume: "8",
		year: "2024"
	}
];

export const oralsDomestic: Publication[] = [
	{
		author: "松本浩明 and 石井啓之 and 薄羽大樹 and 菊池浩明",
		journal: "コンピュータセキュリティシンポジウム2014論文集",
		number: "2",
		pages: "9--16",
		title: "Drive-by-Download 攻撃通信の可視化システム",
		volume: "2014",
		year: "2014"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/D183/paper.pdf",
		author: "薄羽大樹 and 山中祥太 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		number: "22",
		pages: "1--6",
		title: "投げなわ選択と途中省略型投げなわ選択の性能評価",
		volume: "2017-HCI-172",
		year: "2017"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/D198/paper.pdf",
		author: "山田開斗 and 薄羽大樹 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		number: "1",
		pages: "1--6",
		title: "ドローン操縦におけるポインティングの評価",
		volume: "2018-HCI-179",
		year: "2018"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/D198/paper.pdf",
		_others_: "学生奨励賞",
		author: "山田開斗 and 薄羽大樹 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		number: "2",
		pages: "1--6",
		title: "ドローン操縦におけるクロッシングの評価",
		volume: "2019-HCI-181",
		year: "2019"
	},
	{
		author: "木崎駿也 and 薄羽大樹 and 山田開斗 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		number: "23",
		pages: "1--8",
		title:
			"Valve Icon: オーバーシュート後に生成される壁を用いたポインティング高速化手法の提案",
		volume: "2019-HCI-185",
		year: "2019"
	},
	{
		_others_: "学生奨励賞",
		author: "島田雄輝 and 薄羽大樹 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		number: "22",
		pages: "1--7",
		title: "MAGIC Pointingの操作時間予測モデル",
		volume: "2020-HCI-187",
		year: "2020"
	},
	{
		author: "Hiroki Usuba and Shota Yamanaka and Homei Miyashita",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		number: "31",
		pages: "1--6",
		title: "Filling Linear Grids in Presence or Absence of Displayed Grids",
		volume: "2020-HCI-187",
		year: "2020"
	},
	{
		author: "木崎駿也 and 薄羽大樹 and 山田開斗 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		number: "32",
		pages: "1--7",
		title: "2次元ポインティングにおけるValve Iconの性能評価",
		volume: "2020-HCI-187",
		year: "2020"
	},
	{
		_others_: "学生奨励賞",
		author: "清水美玖 and 島田雄輝 and 薄羽大樹 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		number: "1",
		pages: "1--6",
		title:
			"表示タイミングが不明なテンポラルポインティングにおけるエラー率モデル",
		volume: "2021-HCI-191",
		year: "2021"
	},
	{
		author: "大塲洋介 and 薄羽大樹 and 山中祥太 and 宮下芳明",
		journal: "研究報告ヒューマンコンピュータインタラクション (HCI)",
		number: "55",
		pages: "1--8",
		title: "画面角と画面端のターゲット配置が操作時間に与える影響",
		volume: "2022-HCI-197",
		year: "2022"
	},
	{
		author: "山中祥太 and 薄羽大樹 and 山下郁矢 and 笹谷奈翁美 and 佐藤潤一",
		journal: "研究報告エンタテインメントコンピューティング（EC）",
		number: "25",
		pages: "1--7",
		title:
			"スマートフォン用ウェブページにおけるタップ成功率推定ツールTappyの実用化",
		volume: "2024-EC-72",
		year: "2024"
	}
];

export const papersDomesticWithReview: Publication[] = [
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/D153/paper.pdf",
		_others_: "Acceptance rate 44%",
		_videourl_: "https://www.youtube.com/watch?v=wnXBYoBeNv4",
		author: "薄羽大樹 and 宮下芳明",
		journal:
			"第23回インタラクティブシステムとソフトウェアに関するワークショップ論文集（WISS2015）",
		title: "コメントイン：コメントを先に書くことによる新形態のAPIリファレンス",
		year: "2015"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/D214/paper.pdf",
		_others_: "Acceptance rate 53%",
		author: "薄羽大樹 and 山中祥太 and 宮下芳明",
		journal: "インタラクション2019論文集",
		pages: "122--130",
		title: "Motor WidthとVisual Widthの差を考慮したポインティングのモデル化",
		year: "2019"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/D230/paper.pdf",
		_others_: "Acceptance rate 50%",
		author: "薄羽大樹 and 山中祥太 and 宮下芳明",
		journal: "インタラクション2020論文集",
		pages: "78--86",
		title: "幅の異なる経路が連結されたコーナリングタスクのモデル化",
		year: "2020"
	},
	{
		author: "島田雄輝 and 薄羽大樹 and 宮下芳明",
		journal: "インタラクション2021論文集",
		pages: "1--10",
		title:
			"視線を用いた1次元ポインティングにおける1次サッカードエラー率のモデル化",
		year: "2021"
	}
];

export const papersInternationalWithReview: Publication[] = [
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/I33/paper.pdf",
		_others_: "Full paper; acceptance rate 24.5%",
		acmid: "3240171",
		address: "New York, NY, USA",
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		booktitle:
			"Proceedings of the 10th Nordic Conference on Human-Computer Interaction",
		doi: "10.1145/3240167.3240171",
		isbn: "978-1-4503-6437-9",
		keywords:
			"Fitts' law, difference in motor and visual widths, human performance, small target pointing",
		location: "Oslo, Norway",
		numpages: "9",
		pages: "161--169",
		publisher: "ACM",
		series: "NordiCHI '18",
		title:
			"User Performance by the Difference Between Motor and Visual Widths for Small Target Pointing",
		url: "http://doi.acm.org/10.1145/3240167.3240171",
		year: "2018"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/I34/paper.pdf",
		_others_: "Long paper; acceptance rate 40%",
		acmid: "3292150",
		address: "New York, NY, USA",
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		booktitle:
			"Proceedings of the 30th Australian Conference on Computer-Human Interaction",
		doi: "10.1145/3292147.3292150",
		isbn: "978-1-4503-6188-0",
		keywords:
			"different motor and visual target widths, graphical user interfaces, human performance, target acquisition",
		location: "Melbourne, Australia",
		numpages: "10",
		pages: "374--383",
		publisher: "ACM",
		series: "OzCHI '18",
		title:
			"Pointing to Targets with Difference Between Motor and Visual Widths",
		url: "http://doi.acm.org/10.1145/3292147.3292150",
		year: "2018"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/I38/paper.pdf",
		address: "Cham",
		author: "Yamada, Kaito and Usuba, Hiroki and Miyashita, Homei",
		booktitle: "HCI International 2019 -- Late Breaking Papers",
		editor: "Stephanidis, Constantine",
		isbn: "978-3-030-30033-3",
		pages: "422--432",
		publisher: "Springer International Publishing",
		title: "Modeling Drone Crossing Movement with Fitts' Law",
		url: "https://doi.org/10.1007/978-3-030-30033-3_33",
		year: "2019"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/I39/paper.pdf",
		_others_: "Acceptance rate 26.4%",
		acmid: "3340131",
		address: "New York, NY, USA",
		articleno: "20",
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		booktitle:
			"Proceedings of the 21st International Conference on Human-Computer Interaction with Mobile Devices and Services",
		doi: "10.1145/3338286.3340131",
		isbn: "978-1-4503-6825-4",
		keywords:
			"Effects of motor and visual widths, Fitts' law, GUIs, finger pointing",
		location: "Taipei, Taiwan",
		numpages: "8",
		pages: "20:1--20:8",
		publisher: "ACM",
		series: "MobileHCI '19",
		title:
			"Touch Pointing Performance for Uncertain Touchable Sizes of 1D Targets",
		url: "http://doi.acm.org/10.1145/3338286.3340131",
		year: "2019"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/I40/paper.pdf",
		_others_: "Academic Paper; acceptance rate 30.6%",
		address: "New York, NY, USA",
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		booktitle:
			"Proceedings of the 2019 ACM International Conference on Interactive Surfaces and Spaces",
		doi: "10.1145/3343055.3359707",
		isbn: "9781450368919",
		keywords:
			"multiple selection, steering law, graphical user interfaces, lasso criteria",
		location: "Daejeon, Republic of Korea",
		numpages: "11",
		pages: "181--191",
		publisher: "Association for Computing Machinery",
		series: "ISS '19",
		title:
			"Comparing Lassoing Criteria and Modeling Straight-Line and One-Loop Lassoing Motions Considering Criteria",
		url: "https://doi.org/10.1145/3343055.3359707",
		year: "2019"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/I41/paper.pdf",
		_others_: "Short paper; acceptance rate 48.2%",
		address: "New York, NY, USA",
		author: "Nakanishi, Mayumi and Usuba, Hiroki and Miyashita, Homei",
		booktitle:
			"Proceedings of the 31st Australian Conference on Human-Computer-Interaction",
		doi: "10.1145/3369457.3369520",
		isbn: "9781450376969",
		keywords:
			"Fitts' law, pointing movements, Delboeuf illusion, visual illusion",
		location: "Fremantle, WA, Australia",
		numpages: "4",
		pages: "476--479",
		publisher: "Association for Computing Machinery",
		series: "OZCHI'19",
		title: "Effects of Delboeuf Illusion on Pointing Performance",
		url: "https://doi.org/10.1145/3369457.3369520",
		year: "2019"
	},
	{
		_others_: "Acceptance rate 51.7%",
		author:
			"Yamanaka, Shota and Usuba, Hiroki and Takahashi, Haruki and Miyashita, Homei",
		booktitle: "Proceedings of Graphics Interface 2020",
		doi: "10.20380/GI2020.46",
		isbn: "978-0-9947868-5-2",
		location: "University of Toronto",
		numpages: "9",
		pages: "461--469",
		publisher:
			"Canadian Human-Computer Communications Society / Société canadienne du dialogue humain-machine",
		series: "GI 2020",
		title:
			"Peephole Steering: Speed Limitation Models for Steering Performance in Restricted View Sizes",
		year: "2020"
	},
	{
		_others_: "Acceptance rate 21.6%",
		address: "New York, NY, USA",
		author:
			"Yamanaka, Shota and Usuba, Hiroki and Takahashi, Haruki and Miyashita, Homei",
		booktitle:
			"Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology",
		doi: "10.1145/3379337.3415896",
		isbn: "9781450375146",
		keywords:
			"servo-mechanism model, moving targets, success rate prediction, manual tracking, steering law",
		location: "Virtual Event, USA",
		numpages: "14",
		pages: "844--857",
		publisher: "Association for Computing Machinery",
		series: "UIST '20",
		title:
			"Servo-Gaussian Model to Predict Success Rates in Manual Tracking: Path Steering and Pursuit of 1D Moving Target",
		url: "https://doi.org/10.1145/3379337.3415896",
		year: "2020"
	},
	{
		_others_: "Acceptance rate 46%",
		address: "New York, NY, USA",
		author: "Usuba, Hiroki and Yamanaka, Shota and Miyashita, Homei",
		booktitle: "32nd Australian Conference on Human-Computer Interaction",
		doi: "10.1145/3441000.3441019",
		isbn: "9781450389754",
		keywords:
			"GUIs, distractor, pointing, Difference between clickable and visual widths, Fitts' law",
		location: "Sydney, NSW, Australia",
		numpages: "10",
		pages: "1--10",
		publisher: "Association for Computing Machinery",
		series: "OzCHI '20",
		title:
			"A Model for Pointing at Targets with Different Clickable and Visual Widths and with Distractors",
		url: "https://doi.org/10.1145/3441000.3441019",
		year: "2020"
	},
	{
		_others_: "Acceptance rate 24.6%",
		address: "New York, NY, USA",
		articleno: "211",
		author: "Yamanaka, Shota and Usuba, Hiroki and Miyashita, Homei",
		booktitle: "CHI Conference on Human Factors in Computing Systems",
		doi: "10.1145/3491102.3517466",
		isbn: "9781450391573",
		keywords:
			"crowdsourcing, graphical user interface, Fitts' law, human motor performance, pointing",
		location: "New Orleans, LA, USA",
		numpages: "13",
		publisher: "Association for Computing Machinery",
		series: "CHI '22",
		title:
			"Bivariate Effective Width Method to Improve the Normalization Capability for Subjective Speed-Accuracy Biases in Rectangular-Target Pointing",
		url: "https://doi.org/10.1145/3491102.3517466",
		year: "2022"
	},
	{
		address: "New York, NY, USA",
		articleno: "579",
		author: "Yamanaka, Shota and Usuba, Hiroki",
		booktitle:
			"Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems",
		doi: "10.1145/3544548.3580746",
		isbn: "9781450394215",
		keywords:
			"error rate prediction, endpoint distribution, Human motor performance",
		location: "Hamburg, Germany",
		numpages: "18",
		publisher: "Association for Computing Machinery",
		series: "CHI '23",
		title:
			"Tuning Endpoint-Variability Parameters by Observed Error Rates to Obtain Better Prediction Accuracy of Pointing Misses",
		url: "https://doi.org/10.1145/3544548.3580746",
		year: "2023"
	}
];

export const postersAndDemosDomestic: Publication[] = [
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/D190/paper.pdf",
		_videourl_: "https://www.youtube.com/watch?v=0HAUZrGvOnc",
		author: "薄羽大樹 and 宮下芳明",
		booktitle:
			"第25回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS2017) ",
		organization: "日本ソフトウェア科学会",
		title: "Extended Lasso: 延長線を利用する自由選択手法の提案",
		year: "2017"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/D193/paper.pdf",
		_others_: "プレミアム発表; Selection rate 18.5%",
		_pressrelease_:
			"http://www.meiji.ac.jp/koho/press/2017/6t5h7p00000qml8e.html",
		_videourl_: "https://www.youtube.com/watch?v=dsO3_G_79EY",
		author:
			"加藤邦拓 and 薄羽大樹 and 鳥山らいか and 竹内まゆ and 野崎玲那 and 細谷美月 and 宮下芳明",
		booktitle: "インタラクション2018論文集",
		organization: "情報処理学会",
		pages: "889--894",
		title:
			"タッチパネルを拡張する紙製インタフェースを搭載したインタラクティブパッケージの開発",
		year: "2018"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/D211/paper.pdf",
		_videourl_: "https://www.youtube.com/watch?v=wx-NvKkorrk",
		author: "島田雄輝 and 薄羽大樹 and 宮下芳明",
		booktitle:
			"第26回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS2018) ",
		organization: "日本ソフトウェア科学会",
		title: "数式の記述方法を選択できるプログラミングインタフェース",
		year: "2018"
	},
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/D215",
		_videourl_: "https://www.youtube.com/watch?v=_QZGLHWzPXE",
		author: "池田沙厘奈 and 薄羽大樹 and 宮下芳明",
		journal: "インタラクション2019論文集",
		pages: "193--198",
		title: "視線追跡HMDと眉間を用いた「目掴み」の評価",
		year: "2019"
	},
	{
		author: "山室日向人 and 薄羽大樹 and 宮下芳明",
		journal: "インタラクション2021論文集",
		pages: "1--3",
		title: "Colorful Zeebra: 母音と子音を着色するリリック作成システム",
		year: "2021"
	}
];

export const postersAndDemosInternationalWithReview: Publication[] = [
	{
		_miyashitacomurl_: "https://research.miyashita.com/papers/I37/paper.pdf",
		_others_: "Acceptance rate 42.2%",
		_videourl_: "https://www.youtube.com/watch?v=TyjpMxyI9q8",
		acmid: "3312835",
		address: "New York, NY, USA",
		articleno: "LBW2519",
		author: "Yamada, Kaito and Usuba, Hiroki and Miyahita, Homei",
		booktitle:
			"Extended Abstracts of the 2019 CHI Conference on Human Factors in Computing Systems",
		doi: "10.1145/3290607.3312835",
		isbn: "978-1-4503-5971-9",
		keywords: "drone, fitts' law, human-drone interaction, pointing task",
		location: "Glasgow, Scotland Uk",
		numpages: "6",
		pages: "LBW2519:1--LBW2519:6",
		publisher: "ACM",
		series: "CHI EA '19",
		title: "Modeling Drone Pointing Movement with Fitts' Law",
		url: "http://doi.acm.org/10.1145/3290607.3312835",
		year: "2019"
	}
];
