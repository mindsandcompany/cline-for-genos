import { ActionMetadata } from "./types"

export const ACTION_METADATA: ActionMetadata[] = [
	{
		id: "readFiles",
		label: "프로젝트 파일 읽기",
		shortName: "읽기",
		description: "Cline이 워크스페이스 내 파일을 읽을 수 있도록 허용합니다.",
		icon: "codicon-search",
		subAction: {
			id: "readFilesExternally",
			label: "모든 파일 읽기",
			shortName: "읽기 (모두)",
			description: "Cline이 컴퓨터의 모든 파일을 읽을 수 있도록 허용합니다.",
			icon: "codicon-folder-opened",
			parentActionId: "readFiles",
		},
	},
	{
		id: "editFiles",
		label: "프로젝트 파일 편집",
		shortName: "편집",
		description: "Cline이 워크스페이스 내 파일을 수정할 수 있도록 허용합니다.",
		icon: "codicon-edit",
		subAction: {
			id: "editFilesExternally",
			label: "모든 파일 편집",
			shortName: "편집 (모두)",
			description: "Cline이 컴퓨터의 모든 파일을 수정할 수 있도록 허용합니다.",
			icon: "codicon-files",
			parentActionId: "editFiles",
		},
	},
	{
		id: "executeSafeCommands",
		label: "안전한 명령 실행",
		shortName: "안전 명령",
		description:
			"Cline이 안전한 터미널 명령을 실행할 수 있도록 허용합니다. 모델이 명령이 파괴적일 수 있다고 판단하면 여전히 승인이 필요합니다.",
		icon: "codicon-terminal",
		subAction: {
			id: "executeAllCommands",
			label: "모든 명령 실행",
			shortName: "모든 명령",
			description: "Cline이 모든 터미널 명령을 실행할 수 있도록 허용합니다. 사용에 따른 책임은 본인에게 있습니다.",
			icon: "codicon-terminal-bash",
			parentActionId: "executeSafeCommands",
		},
	},
	{
		id: "useBrowser",
		label: "브라우저 사용",
		shortName: "브라우저",
		description: "Cline이 브라우저에서 모든 웹사이트를 실행하고 상호작용할 수 있도록 허용합니다.",
		icon: "codicon-globe",
	},
	{
		id: "useMcp",
		label: "MCP 서버 사용",
		shortName: "MCP",
		description: "Cline이 파일 시스템을 수정하거나 API와 상호작용할 수 있는 구성된 MCP 서버를 사용할 수 있도록 허용합니다.",
		icon: "codicon-server",
	},
]

export const NOTIFICATIONS_SETTING: ActionMetadata = {
	id: "enableNotifications",
	label: "알림 활성화",
	shortName: "알림",
	description: "Cline이 승인이 필요하거나 작업이 완료되었을 때 시스템 알림을 받습니다.",
	icon: "codicon-bell",
}
