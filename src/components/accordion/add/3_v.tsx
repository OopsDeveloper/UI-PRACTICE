import data from "../data"
import VanillaWrapper from "../vanillaWrapper";
import type { StyleProps } from '../../../types/common';

const itemBuilder = ({ 
  id, 
  title, 
  description,
  styles,
}: { 
  id: string; 
  title: string; 
  description: string; 
  styles: { [key: string]: string};
}) => {
  const $li = document.createElement('li');
  $li.classList.add(styles.item, styles.item3);
  $li.setAttribute('data-id', id);

  const $tab = document.createElement('div');
  $tab.classList.add(styles.tab);
  $tab.textContent = title;

  
  const $description = document.createElement('div');
  $description.classList.add(styles.description);
  $description.textContent = description;

  $li.append($tab, $description);
  return $li;
}

const initiator = (styles: StyleProps["styles"]) => (wrapper: HTMLDivElement) => {
  let currentId: string | null = null;

  const $ul = document.createElement('ul');
  $ul.classList.add(styles.container);

  const handleClickTab = (e: Event) => {
    const $el = e.target as HTMLElement
    if(!$el.classList.contains(styles.tab)) { return; }
    const targetId = $el.parentElement!.dataset.id;

    if(!targetId) { return; }
    currentId = targetId === currentId ? null : targetId;

    $items.forEach($item => {
      $item.classList.toggle(styles.current,  currentId === $item.dataset.id)
    })
  }
  $ul.addEventListener('click', handleClickTab);

  const $items = data.map((d) => itemBuilder({ ...d, styles }));
  console.log($items);
  
  $ul.append(...$items);

  wrapper.append($ul);
  ($items[0].children[0] as HTMLElement).click()

}

const Accordion3v = ({ styles }: StyleProps) => <VanillaWrapper title="#3" initiator={initiator(styles)}/>
export default Accordion3v