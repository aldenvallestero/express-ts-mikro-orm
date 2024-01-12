import app from './configs/app-config';
import { PORT } from './commons/app-references-common';

app.listen(PORT, () => console.log('Server started running on port', PORT));
