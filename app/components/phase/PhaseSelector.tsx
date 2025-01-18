import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface Phase {
  label: string;
  value: string;
}

type PhaseSelectorProps = {
  phaseList: Phase[];
  value: string;
  onChange: (value: string) => void;
  onRegister: () => void;
};

function PhaseSelector({ phaseList, value, onChange, onRegister }: PhaseSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="기수" />
        </SelectTrigger>
        <SelectContent>
          {phaseList.map((phase) => (
            <SelectItem key={phase.value} value={phase.value}>
              {phase.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button className="bg-slate-800" onClick={onRegister}>
        신규 기수 등록
      </Button>
    </div>
  );
}

export default PhaseSelector;
