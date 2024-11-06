export type User = {
    id: string
    name: string
    email: string
    password: string
    saldo: number
}

export type ReqLoginUser = {
    name: string
    email: string
    password: string
}

export type GAnimal = {
    id: string
    owner: string
    name: string
    genome: string
}

export class Color {
    hex: string;
    r: number;
    g: number;
    b: number;
    a: number;

    constructor(hexString: string) {
        if(hexString.length !== 8) throw new Error(`Hex string must be 8 characters long. But it is: ${hexString.length}`);

        this.hex = "#" + hexString;
        this.r = parseInt(hexString.substring(0, 2), 16);
        this.g = parseInt(hexString.substring(2, 4), 16);
        this.b = parseInt(hexString.substring(4, 6), 16);
        this.a = parseInt(hexString.substring(6, 8), 16);
    }

    static combineColors(firstColor: Color, secondColor: Color): Color {
        const r = Math.round((firstColor.r + secondColor.r) / 2).toString(16).padStart(2, '0');
        const g = Math.round((firstColor.g + secondColor.g) / 2).toString(16).padStart(2, '0');
        const b = Math.round((firstColor.b + secondColor.b) / 2).toString(16).padStart(2, '0');
        const a = Math.round((firstColor.a + secondColor.a) / 2).toString(16).padStart(2, '0');

        return new Color(r + g + b + a);
    }
}

export class Genom {
    gender: boolean;
    isCarnivour: boolean;
    baseColor: Color;
    eyeColor: Color;
    specialColor: Color;
    enviroment: number;
    hasClaws: boolean;
    hasSpikes: boolean;

    constructor(
        gender: boolean,
        isCarnivour: boolean,
        baseColor: Color,
        eyeColor: Color,
        specialColor: Color,
        enviroment: number,
        hasClaws: boolean,
        hasSpikes: boolean
    ) {
        this.gender = gender;
        this.isCarnivour = isCarnivour;
        this.baseColor = baseColor;
        this.eyeColor = eyeColor;
        this.specialColor = specialColor;
        this.enviroment = enviroment;
        this.hasClaws = hasClaws;
        this.hasSpikes = hasSpikes;
    }

    toHexString(): string {
        const genderString = this.gender ? "1" : "0";
        const isCarnivourString = this.isCarnivour ? "1" : "0";
        const hasClawsString = this.hasClaws ? "1" : "0";
        const hasSpikesString = this.hasSpikes ? "1" : "0";

        return (
            genderString +
            isCarnivourString +
            "x" +
            this.baseColor.hex +
            this.eyeColor.hex +
            this.specialColor.hex +
            this.enviroment.toString() +
            hasClawsString +
            hasSpikesString
        );
    }

    static analyzeParentString(parentString: string): Genom {
        const gender = parentString.charAt(0) === "1";
        const isCarnivour = parentString.charAt(1) === "1";

        const baseColor = new Color(parentString.substring(3, 11));
        const eyeColor = new Color(parentString.substring(11, 19));
        const specialColor = new Color(parentString.substring(19, 27));

        const enviroment = parseInt(parentString.substring(27, 28), 10);

        const hasClaws = parentString.charAt(28) === "1";
        const hasSpikes = parentString.charAt(29) === "1";

        return new Genom(gender, isCarnivour, baseColor, eyeColor, specialColor, enviroment, hasClaws, hasSpikes);
    }
}
