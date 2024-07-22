import io
import os

from dotenv import load_dotenv
from langflow.custom import Component
from langflow.inputs import SecretStrInput, MultilineInput
from langflow.schema.message import Message
from langflow.template import Output


class Dotenv(Component):
    display_name = "Dotenv"
    description = "Load .env file into env vars"

    inputs = [
        MultilineInput(
            name="dotenv_file_content",
            display_name="Dotenv file content",
            info="Paste the content of your .env file directly, since contents are sensitive, using a Global variable set as 'password' is recommended",
        )
    ]

    outputs = [
        Output(display_name="env_set", name="env_set", method="process_inputs"),
    ]

    def process_inputs(self) -> Message:
        try:
            print(self.dotenv_file_content)
            fake_file = io.StringIO(self.dotenv_file_content)
            result = load_dotenv(stream=fake_file, override=True)
            message = Message(
                text=str(result)
            )
            print(os.environ)
            return message
        except Exception as e:
            raise e
