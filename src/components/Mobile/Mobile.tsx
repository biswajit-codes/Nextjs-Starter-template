"use client";

import { List } from "lucide-react";
import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import { Button } from "../shadcnui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../shadcnui/sheet";

const Mobile = () => {
	return (
		<nav className="flex sm:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="ghost"
						aria-label="Open menu">
						<List
							size={120}
							color="#ffffff"
							strokeWidth={3}
						/>
					</Button>
				</SheetTrigger>

				<SheetContent
					side="left"
					className="p-0">
					<div className="flex h-full w-full max-w-sm flex-col">
						{/* Header */}
						<SheetHeader className="px-4 py-3">
							<SheetTitle>Mobile Menu</SheetTitle>
							{/*  ✅ Add this */}

							<SheetDescription></SheetDescription>
						</SheetHeader>

						{/* Links */}
						<div className="flex-1 space-y-4 px-4 py-2">
							<Link
								href="/"
								className="block rounded-md px-4 py-2 text-lg transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-300">
								Home
							</Link>

							<Link
								href="/about"
								className="block rounded-md px-4 py-2 text-lg transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-300">
								About Us
							</Link>
						</div>
						{/* Footer */}
						<SheetFooter className="border-t p-4">
							<div className="flex justify-between">
								<ThemeToggleButton />
								<SheetClose asChild>
									<Button
										variant="destructive"
										className="w-20">
										Cancel
									</Button>
								</SheetClose>
							</div>
						</SheetFooter>
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default Mobile;
