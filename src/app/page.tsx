import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <h1 className={"text-3xl font-bold underline"}>
            Hello World!
            <Button variant={"default"} font={"xl"}> Click Me </Button>
        </h1>
    );
}
