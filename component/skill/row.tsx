import React, { PropsWithChildren } from 'react';
import { Col, Row } from 'reactstrap';
import { Style } from '../common/Style';
import { customDebug } from '../common/Utils';
import { ISkill } from './ISkill';

const SkillRow = function ({
  skill,
  index,
}: PropsWithChildren<{ skill: ISkill.Skill; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-end">
          <h4 style={Style.gray}>{skill.category}</h4>
        </Col>
        <Col sm={12} md={9}>
          {/* {skill.items.map((item) => JSON.stringify(item, null, 2))} */}
          {createCalculatedSkillItems(skill.items)}
        </Col>
      </Row>
    </div>
  );
};

const createCalculatedSkillItems = (items: ISkill.Item[]) => {
  const log = customDebug('SkillRow:createCalculatedSkillItems');

  /**
   * @developer_commentary 단을 3단, 4단을 시도해봤지만 생각보다 이쁘게 나오지 않았고, 우선은 3단으로 한다. 만약 이쪽을 발전시킨다면 조금 더 이쁘고 능동적이게 데이터를 쪼갤 수 있는 방법을 찾으면 될 듯..
   */
  const layer = 3;

  // const splitPoint = layer % 2 ? Math.ceil(items.length / layer) : Math.floor(items.length / layer);
  const splitPoint = Math.ceil(items.length / layer);

  const list: ISkill.Item[][] = [];

  for (let i = 0, splitAfter = splitPoint; i < layer; i += 1, splitAfter += splitPoint) {
    list.push(items.slice(splitAfter - splitPoint, i === layer - 1 ? undefined : splitAfter));
  }

  log('origin', items, items.length, splitPoint);
  log('list', list);

  return (
    <Row className="mt-2 mt-md-0">
      {list.map((skills, index) => (
        <Col md={4} xs={12} key={index.toString()}>
          <ul>
            {skills.map((skill, skillIndex) => (
              <li key={skillIndex.toString()}>
                {/* {createBadge(skill.level)} */}
                {skill.title}
              </li>
            ))}
          </ul>
        </Col>
      ))}
    </Row>
  );
};

// const createBadge = (level?: ISkill.Item['level']) => {
//   if (!level) {
//     return '';
//   }
//
//   const options = (() => {
//     switch (level) {
//       case 3: {
//         return { color: 'primary' };
//       }
//       case 2: {
//         return { color: 'secondary' };
//       }
//       case 1:
//       default: {
//         return { color: 'light', className: 'text-dark' };
//       }
//     }
//   })();
//
//   return (
//     <span>
//       <Badge pill {...options}>
//         {level}
//       </Badge>{' '}
//     </span>
//   );
// };

export default SkillRow;
