import {HandlerInterface} from "./HandlerInterface";
import {FormatterInterface} from "../Formatter/FormatterInterface";

export interface FormattableHandlerInterface extends HandlerInterface {
  getFormatter(): FormatterInterface;

  setFormatter(formatter: FormatterInterface);
}
