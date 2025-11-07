import { EmptyRequest } from "@shared/proto/cline/common"
import { InfoIcon } from "lucide-react"
import ClineLogoVariable from "@/assets/ClineLogoVariable"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { UiServiceClient } from "@/services/grpc-client"

interface HomeHeaderProps {
	shouldShowQuickWins?: boolean
}

const HomeHeader = ({ shouldShowQuickWins = false }: HomeHeaderProps) => {
	const { environment } = useExtensionState()

	const handleTakeATour = async () => {
		try {
			await UiServiceClient.openWalkthrough(EmptyRequest.create())
		} catch (error) {
			console.error("Error opening walkthrough:", error)
		}
	}

	return (
		<div className="flex flex-col items-center mb-5">
			<div className="my-7">
				<ClineLogoVariable className="size-20" environment={environment} />
			</div>
			<div className="text-center flex items-center justify-center">
				<h1 className="m-0 font-bold">무엇을 도와드릴까요?</h1>
				<Tooltip>
					<TooltipContent side="bottom">
						파일 편집, 프로젝트 탐색, 명령 실행, 브라우저 사용을 통해 단계별로 소프트웨어를 개발할 수 있습니다. MCP
						도구를 활용하여 기본적인 코드 완성을 넘어선 지원도 가능합니다.
					</TooltipContent>
					<TooltipTrigger asChild>
						<InfoIcon className="ml-2 cursor-pointer text-link text-sm size-2" />
					</TooltipTrigger>
				</Tooltip>
			</div>
			{shouldShowQuickWins && (
				<div className="mt-4">
					<button
						className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-panel bg-white/2 hover:bg-list-background-hover transition-colors duration-150 ease-in-out text-code-foreground text-sm font-medium cursor-pointer"
						onClick={handleTakeATour}
						type="button">
						둘러보기
						<span className="codicon codicon-play scale-90"></span>
					</button>
				</div>
			)}
		</div>
	)
}

export default HomeHeader
