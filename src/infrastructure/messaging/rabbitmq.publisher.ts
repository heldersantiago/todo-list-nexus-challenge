import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class RabbitMQPublisher {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
        transport: Transport.RMQ,
        options:[
            urls:[''],
            queue:'users_queue',
            queueOptions:{
                durable:false
            }
            
        ]
    })
  }


  async publishUserCreatedEvent(user:any){
    return this.client.emit('user_created',user)
  }
}
