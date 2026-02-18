type Base = {
    id: string;
    title: string;
};

type GenericSelectProps<TValue> = {
    values: TValue[];
    onChange: (value: TValue) => void;
};

export const GenericSelect = <TValue extends Base>({ values, onChange }: GenericSelectProps<TValue>) => {
    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = values.find((value) => value.id === e.target.value);

        if (val) onChange(val);
    };

    return (
        <div className="flex flex-col">
        <h1>Generic select</h1>
        <select onChange={onSelectChange}>
            {values.map((value) => (
                <option key={value.id} value={value.id}>
                    {value.title}
                </option>
            ))}
        </select>
        </div>
    );
};

export default GenericSelect;