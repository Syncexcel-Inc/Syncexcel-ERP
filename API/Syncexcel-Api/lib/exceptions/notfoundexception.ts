import HttpException from "./httpexception ";
 
class NotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `Record with id ${id} not found`);
  }
}
 
export default NotFoundException;