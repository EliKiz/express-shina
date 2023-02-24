import { dataAddress } from "widgets/Map/ui/Map";

export const ymapService = async (url: string): Promise<dataAddress[]> => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    const data = await response.json();
    return data;
};

