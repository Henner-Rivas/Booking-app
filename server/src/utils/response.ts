import { RequestCustom } from "../interfaces/types";
import { Response } from "express";
function success(req: any, res: Response | any, status = 200, response: any) {
  res.status(status).json({
    error: "",
    status: status,
    body: response,
  });
}

function error(
  req: RequestCustom,
  res: Response,
  status = 500,
  response = "something went wrong"
) {
  res.status(status).json({
    error: response,
    status: status,
    body: "",
  });
}
export { error, success };
