// src/app/not-found.tsx

import { Button } from "@/components/shadcnui/button";
import { Card, CardContent } from "@/components/shadcnui/card";
import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<Card className="w-full max-w-lg rounded-lg bg-white p-8 text-center shadow-xl">
				<CardContent>
					<h1 className="text-6xl font-extrabold text-red-600">
						404
					</h1>
					<h2 className="mt-4 text-2xl font-semibold text-gray-800">
						Oops! The page you're looking for doesn't exist.
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						It seems like the page you requested is missing or has
						been moved. You can return to the homepage or get in
						touch with support.
					</p>
					<div className="mt-6 flex justify-center gap-4">
						<Link href="/">
							<Button
								variant="outline"
								className="text-blue-600 hover:bg-blue-100">
								Go to Homepage
							</Button>
						</Link>
						<Link href="/contact">
							<Button
								variant="outline"
								className="text-green-600 hover:bg-green-100">
								Contact Support
							</Button>
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default NotFound;
