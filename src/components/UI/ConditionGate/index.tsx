import { ParentProps } from "../../types/Props"

const ConditionGate = ({ children, condition } : ParentProps & { condition: boolean }) =>{
    return condition && children
}

export default ConditionGate