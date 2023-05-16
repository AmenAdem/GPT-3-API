import { Injectable } from '@nestjs/common';
import { CreateGptDto } from './dto/create-gpt.dto';
import { UpdateGptDto } from './dto/update-gpt.dto';
import { Configuration, CreateCompletionRequest, OpenAIApi } from "openai";

@Injectable()
export class GptService {
  private readonly openai: OpenAIApi;
  constructor() {
    const configuration = new Configuration({
      organization: "org-sOuw71nYSfuNwYeZXSA4hqLn",
      apiKey: process.env.OPENAI_API_KEY,
  });
  this.openai = new OpenAIApi(configuration);
  }

  async getModelAnswer(question: string, context: string) {
    try {
      const params:CreateCompletionRequest = {
        prompt: question + "\n" + context + "\n",
        temperature: 0.9,
        model: "gpt-3.5-turbo",
  
   //     topP: 1,
     //   frequencyPenalty: 0,
       // presencePenalty: 0,
       // stop: ["\n"],
      };
      const response = await this.openai.createCompletion(params);
      console.log(response);
      return response.data.choices[0].text;

      
    } catch (error) {
      
    }


  }
  // create(createGptDto: CreateGptDto) {
  //   return 'This action adds a new gpt';
  // }

  // findAll() {
  //   return `This action returns all gpt`;
  // }

}
