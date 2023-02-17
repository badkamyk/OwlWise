export default function FormModal({
	setIsModal,
	text,
}: {
	setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
	text: string;
}) {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-500 opacity-75">
			<div className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-lg dark:bg-gray-900">
				<div className="flex items-center justify-between">
					<div className="text-lg font-medium text-gray-900 dark:text-gray-100">
						Thank you!
					</div>
					<button
						onClick={() => setIsModal(false)}
						className="text-gray-400 hover:text-gray-500"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div className="mt-2">
					<p className="text-sm text-gray-500 dark:text-gray-400">{text}</p>
				</div>
			</div>
		</div>
	);
}
