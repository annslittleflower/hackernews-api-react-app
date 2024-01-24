import { useState, FormEvent } from "react";
import { Input, Button } from "@/common/ui";

type Props = {
	articleId: number
}

type Comment = {
	by: string
	parent: number // articleId
	text: string
	time: number
	type: string // "comment"
}

const Comments = ({articleId}: Props) => {
	const [comments, setComments] = useState<Comment[]>([])

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		// TODO this is not best way
		const newComment = {
			by: (event.currentTarget.elements.namedItem('by') as HTMLInputElement).value,
			text: (event.currentTarget.elements.namedItem('text') as HTMLInputElement).value,
			time: Date.now(),
			parent: articleId,
			type: 'comment'
		}

		setComments((prev) => [newComment, ...prev])

		console.log('newComment', newComment)

		event.currentTarget.reset()
	}

  return (
    <div className="border-2 m-8 p-8">
			<p className="text-xl mb-4">Comments</p>

			{comments.length ? (
				<div className="border-b-2 mb-4">
					{comments.map(c => (
						<div key={c.time} className="mb-4">
							{c.by}: {c.text}
						</div>
					))}
				</div>
			) : null}


			<form onSubmit={onSubmit} className="max-w-[500px]">
				<label htmlFor="by" className="cursor-pointer block text-md">Your name:</label>
				<Input id="by" name="by" placeholder="your name:"  className="w-full border-2 mt-2 max-w-[300px] border-gray-700 block text-md px-4 py-3 mb-8"/>
				<textarea id='text' name="text" placeholder="comment" className="border-2 w-full resize max-w-full border-gray-700 text-2xl px-4 py-3 mb-4"/>
				<Button className="block border-2 p-2 ml-auto" type="submit">add comment</Button>
			</form>
    </div>
  );
}

export default Comments